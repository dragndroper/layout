const headerCanScrollDown = () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    })
}

// PRODUCTS START

const hazelnutTopRotate = () => {
    const hazelnutTop = document.querySelector('.products__hazelnut-top');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            hazelnutTop.classList.add('hazelnut-top_active')
        } else {
            hazelnutTop.classList.remove('hazelnut-top_active')
        }
    })
};

const hazelnutBottomRotate = () => {
    const hazelnutBot = document.querySelector('.products__hazelnut-bottom');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            hazelnutBot.classList.add('hazelnut-bottom_active')
        } else {
            hazelnutBot.classList.remove('hazelnut-bottom_active')
        }
    })
};


const coconutTopRotate = () => {
    const coconutTop = document.querySelector('.products__coconut-top');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            coconutTop.classList.add('coconut-top_active')
        } else {
            coconutTop.classList.remove('coconut-top_active')
        }
    })
};

hazelnutTopRotate();
coconutTopRotate();
hazelnutBottomRotate();
headerCanScrollDown();

// PRODUCTS END



// SPICES START


const strawberryLeftTopRotate = () => {
    const strawberryLeftTop = document.querySelector('.spices__spices-strawberry-first');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 3000) {
            strawberryLeftTop.classList.add('strawberry-first_active')
        } else {
            strawberryLeftTop.classList.remove('strawberry-first_active')
        }
    })
};

const strawberryLeftBotRotate = () => {
    const strawberryLeftBot = document.querySelector('.spices__spices-strawberry-second');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 3000) {
            strawberryLeftBot.classList.add('strawberry-second_active')
        } else {
            strawberryLeftBot.classList.remove('strawberry-second_active')
        }
    })
};

const strawberryRightRotate = () => {
    const strawberryRightBot = document.querySelector('.spices__spices-strawberry-third');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 3000) {
            strawberryRightBot.classList.add('strawberry-third_active')
        } else {
            strawberryRightBot.classList.remove('strawberry-third_active')
        }
    })
};

const blueberryLeftRotate = () => {
    const blueberryLeft = document.querySelector('.spices__spices-blueberry');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 3600) {
            blueberryLeft.classList.add('spices-blueberry_active')
        } else {
            blueberryLeft.classList.remove('spices-blueberry_active')
        }
    })
};

const blueberryRightRotate = () => {
    const blueberryRight = document.querySelector('.spices__spices-blueberry2');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 3600) {
            blueberryRight.classList.add('spices-blueberry2_active')
        } else {
            blueberryRight.classList.remove('spices-blueberry2_active')
        }
    })
};

const coconutMiddleRotate = () => {
    const coconutMiddle = document.querySelector('.spices__spices-coconut');
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 3600) {
            coconutMiddle.classList.add('spices-coconut_active')
        } else {
            coconutMiddle.classList.remove('spices-coconut_active')
        }
    })
};


strawberryLeftTopRotate()
strawberryLeftBotRotate()
strawberryRightRotate()
blueberryLeftRotate()
blueberryRightRotate()
coconutMiddleRotate()

// SPICES END
