
const totalScores = [85, 90, 78, 88, 92];
const studentScore = 80;
let resultsVisible = false;


function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);

    const resultMsg = studentGrade === "F" ? "Você reprovou no curso." : "Você passou no curso.";

    return `Média da classe: ${classAverage.toFixed(2)}. Sua nota: ${studentGrade}. ${resultMsg}`;
}

function showResults() {
    const classAverageElement = document.getElementById("class-average");
    const studentGradeElement = document.getElementById("student-grade");
    const statusElement = document.getElementById("status");

    if (resultsVisible) {

        classAverageElement.textContent = '';
        studentGradeElement.textContent = '';
        statusElement.textContent = '';
        resultsVisible = false;
    } else {

        const message = studentMsg(totalScores, studentScore);
        const [averageText, gradeText, statusText] = message.split(". ");

        classAverageElement.textContent = averageText.split(": ")[1];
        studentGradeElement.textContent = gradeText.split(": ")[1];
        statusElement.textContent = statusText;
        resultsVisible = true;
    }
}

document.getElementById("calculate-btn").addEventListener("click", showResults);
