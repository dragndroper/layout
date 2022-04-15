

const burger = document.querySelector('.header__burger');
if (burger) {
    burger.addEventListener('click', () => {
        const menu = document.querySelector('.header__menu')


        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        document.body.classList.toggle('_lock')
    })
}