function animateNumber(element, endValue) {
    let startValue = 0;
    const duration = 2000; // Duração da animação em ms
    const stepTime = 10;
    const steps = duration / stepTime;
    const stepValue = (endValue - startValue) / steps;

    const interval = setInterval(() => {
        startValue += stepValue;
        if (startValue >= endValue) {
            element.textContent = endValue;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(startValue);
        }
    }, stepTime);
}

document.addEventListener('DOMContentLoaded', () => {
    const infoElements = document.querySelectorAll('.titulo-informacoes');
    const values = [850, 40, 2000000];

    infoElements.forEach((el, index) => {
        animateNumber(el, values[index]);
    });
});

