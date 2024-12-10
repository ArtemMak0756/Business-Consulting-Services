if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.1,
        effects: true
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'block';
    }
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
    });
});
// Функции для открытия и закрытия
document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = 'flex';
}
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
}
// Закрытие окна
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}
