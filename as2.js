// JavaScript程式碼可以在這裡添加
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop - document.querySelector('nav').offsetHeight,
        behavior: 'smooth'
    });
}
