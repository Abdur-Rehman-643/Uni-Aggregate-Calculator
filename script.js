function aggregateCalculateAndCheck() {
    const studentName = document.getElementById('studentName').value;
    const matricMarks = parseFloat(document.getElementById('matricMarks').value);
    const fscMarks = parseFloat(document.getElementById('fscMarks').value);
    const entryTestMarks = parseFloat(document.getElementById('entryTestMarks').value);

    const fullMarks = 1100;
    const entrytestfullMarks = 400;

    const matricPercentage = (matricMarks / fullMarks) * 100;
    const fscPercentage = (fscMarks / fullMarks) * 100;
    const entryTestPercentage = (entryTestMarks / entrytestfullMarks) * 100;

    const aggregate = (0.2 * matricPercentage) + (0.3 * fscPercentage) + (0.5 * entryTestPercentage);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${studentName}, your aggregate is ${aggregate.toFixed(2)}%</p>`;

    const studentData = {
        name: studentName,
        aggregate: aggregate.toFixed(2)
    };

    let allStudents = JSON.parse(localStorage.getItem('students')) || [];
    allStudents.push(studentData);
    localStorage.setItem('students', JSON.stringify(allStudents));
    
    if (aggregate > 60) {
        alert('You are eligible for admission');
    } else {
        alert('You are not eligible for admission');
    }
}
