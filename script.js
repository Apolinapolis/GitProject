function preOutput() {
    const resultText = prompt('opa')
    const target = document.getElementById('pre')
    target.textContent = resultText
}

function sayBue() {
    alert('ПОКА')
}

function work() {
    alert('WORK-WORK')
}

(function() {
    alert('s-i FUNK')
}())