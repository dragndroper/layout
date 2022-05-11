# Верстка макета Amazing Places

![Alt-amazing](https://github.com/dragndroper/markup/blob/main/amazingPlaces/img/amazing.jpg?raw=true)


### Шрифты

Получить список шрифтов с макета - Font Fascia  
Получить ссылку на нужные шрифты - Google Fonts Helper  
Подключить шрифты  
- Google Fonts Helper даст код.

### META

```
<meta name="viewport"
          content="width=device-width, user-scalable=no, 
          initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">  
```

initial-scale=1.0 - Текущий масштаб  
minimum-scale=1.0 - Минимальный масштаб  
maximum-scale=1.0 - Максимальный масштаб  
user-scalable=0 - Запрещаем для других устройств масштабировать верстку

### @media

# all

Подходит для всех типов устройств.

# print

Предназначен для страничных материалов и документов, просматриваемых на экране в режиме предварительного просмотра
печати. screen Предназначен в первую очередь для экранов цветных компьютерных мониторов. speech Предназначен для
синтезаторов речи.

## Характеристики устройства:

# width

Проверяет ширину области просмотра. Значения задаются в единицах длины, px, em и т.д., например, (width: 800px). Обычно
для проверки используются минимальные и максимальные значения ширины.

# min-width

Применяет правило если ширина области просмотра больше значения, указанного в запросе, max-width — ширина области
просмотра меньше значения, указанного в запросе.

# height

Проверяет высоту области просмотра. Значения задаются в единицах длины, px, em и т.д., например, (height: 500px). Обычно
для проверки используются минимальные и максимальные значения высоты.

# min-height

Применяет правило если высота области просмотра больше значения, указанного в запросе, max-height — высота области
просмотра которого меньше значения, указанного в запросе.

# aspect-ratio

Проверяет соотношение ширины к высоте области просмотра. Широкоэкранный дисплей с соотношением сторон 16:9 может быть
помечен как (aspect-ratio: 16/9).

# min-aspect-ratio

Проверяет минимальное соотношение, max-aspect-ratio — максимальное соотношение ширины к высоте области просмотра.

# orientation

Проверяет ориентацию области просмотра. Принимает два значения: (orientation: portrait) и (orientation: landscape).

# resolution

Проверяет разрешение экрана (количество пикселей). Значения также могут проверять количество точек на дюйм (dpi) или
количество точек на сантиметр (dpcm), например, (resolution: 300dpi).

# min-resolution

Проверяет минимальное разрешение экрана, max-resolution — максимальное.

# color

Проверяет количество бит на каждый из цветовых компонентов устройства вывода. Например, (min-color: 4) означает, что
экран конкретного устройства должен иметь 4-битную глубину цвета.

# min-color

Проверяет минимальное количество бит, max-color — максимальное количество бит.

# color-index

Проверяет количество записей в таблице подстановки цветов. В качестве значения указывается положительное число,
например, (color-index: 256).

# min-color-index

Проверяет минимальное количество записей, max-color-index — максимальное количество записей.

# monochrome

Проверяет количество битов на пиксель монохромного устройства. Значение задается целым положительным числом, например, (
min-monochrome: 8).

# min-monochrome

Проверяет минимальное количество битов, max-monochrome — максимальное количество битов.

# -webkit-device-pixel-ratio

Задаёт количество физических пикселей устройства на каждый CSS-пиксель.


# Способы выравнивания дочернего блока внутри родителя

### margin: 0 auto - актуальное

```
 <div class="wrap">
    <div class="block m-auto"></div>
</div>

.m-auto {
margin: 0 auto;
}
```

### text-align - редкое

```
 <div class="wrap center">
    ...
</div>

.center {
text-align: center;
}

.block {
...
display: inline-block;
}
```

### position - устаревшее

absolute выравнивается относительно родителя с relative.
fixed выравнивается сам относительно экрана.
sticky приклеивается


```
<div class="wrap relative">
    <div class="block absolute"></div>
</div>

.relative {
position: relative;
}

.absolute {
position: absolute;
left: 50%;
transform: translate (-50%, 0); /* альтернатива margin-left: -50px;  */
}
```

### flex - популярное

```
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    flex-basis: 118px;
    flex-direction: column;

    Также Flex хорошо работает с margin, если элементы слиплись.
```

### grid - современное

```
<div class="wrap grid-parent">
    <div class="block grid-child"></div>
</div>

.grid-parent {
display: grid;
grid-template-areas: "a";
}

.grid-child {
grid-area: a;
justify-self: center;
}
```

ИЛИ

```
.benefits__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 55px;
}
```

ИЛИ (карточки занимают по 1 колонке)

```
.benefits__card {
    grid-column: span 1;
}
```

КАРТИНКУ СНИЗУ ЗАКИНУТЬ ВВЕРХ 

```
grid-row-start: -1;
```

# Единицы измерения

1fr - это одна часть от всего оставшегося пространства, т.е. заданная ширина auto - ширина будет зависеть от ширины
контейнера и от ширины контента каждого item, т.е. незаданное значение ширины

http://css.yoksel.ru/size-units/

# Комментарии

Когда нужно сделать секцию-обертку в main на всю область видимого экрана, то ставят height: 100vh. Если надо охватить и
header, то у него должен стоять position: fixed. Он будет всегда сверху и перестает участвовать в основном потоке
документов и не занимает пространство.

Два input в одну строку в UI отображаются без отступа. Если поставить пробел в IDE, то в UI отступ есть. Потому что
input воспринимаются, как inline объекты.

У input нельзя отрисовать псевдоэлементы. Придется вставлять svg.

Настроить цвет текста у placeholder в input можно через псевдоселектор:

```
.search-form__field::placeholder {
color: #FFFFFF;
}
```



# Box-Sizing

Не даем унаследованным элементам увеличивать свои размеры из-за дополнительных padding

```
html {
box-sizing: border-box;
}

*, *::before, *::after {
box-sizing: inherit;
}
```

# Img

Не даем картинкам менять свои размеры при сужении и расширении

```
img {
max-width: 100%;
height: auto;
}
```

Картинка и подпись

```
<figure class="places__card places__card_size-lg">
                <img src="/img/place1.jpg" alt="Mount Fuji" class="places__card-pic">
                <figcaption class="places__card-title">
                    Mount Fuji
                </figcaption>
```


# Ссылка

Если надо растянуть ссылку по всему блоку, то можно позиционировать и поставить приоритет:

```
.places__card-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
}
```

# Секции

Тег <section> ставится, когда есть title. Иные случаи семантически неправильны.
Нет title, - поставь div.


# Правильный перебор ul li

### Пример

```
<ul>
  <li class="n">Текст</li>
  <li class="lc">текст</li>
  <li class="ac active">текст trigger</li>
  <li class="s">текст</li>
</ul>
```

### [... ].forEach()

```
[...document.querySelectorAll('li')].forEach(node => {
  if (node.classList.contains('ac') && node.classList.contains('active')) {
    console.log(node);
    console.log('do something...');
  }
});
```

### for...of

```
for (const li of document.querySelectorAll('ul li')) {
if (li.matches('.ac.active')) {
console.log(li.outerHTML);
}
}
```

### forEach

```
li.forEach(function(item) {
  if (item.classList.contains('active') && item.classList.contains('ac')) {
    // действие
  }
});
```

### for (let i = 0; i < length; i++)

```
if (window.innerWidth <= 767) {
for (let i = 0; i < menuLinks.length; i++) {
menuLinks[i].addEventListener('click', () => {
menu.classList.remove('header__nav_active')
})
}
}
```


#  Scroll
 
Нужно указать header и в html добавить в класс js-scroll.
Если header не fixed, то нужно удалить из скрипта headerElHeight.

```
    // Scroll to anchors
    (function () {

        const smoothScroll = function (targetEl, duration) {
            const headerElHeight =  document.querySelector('.header').clientHeight;
            let target = document.querySelector(targetEl);
            let targetPosition = target.getBoundingClientRect().top - headerElHeight;
            let startPosition = window.pageYOffset;
            let startTime = null;

            // плавность
            const ease = function(t,b,c,d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            const animation = function(currentTime){
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, targetPosition, duration);
                window.scrollTo(0,run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            requestAnimationFrame(animation);

        };

        const scrollTo = function () {
            const links = document.querySelectorAll('.js-scroll');
            links.forEach(each => {
                each.addEventListener('click', function () {
                    const currentTarget = this.getAttribute('href');
                    smoothScroll(currentTarget, 1000);
                });
            });
        };
        scrollTo();
    }());
```

# Оптимизация для Google

Проверить оптимизацию - https://pagespeed.web.dev/
Сжать изображение - https://imagecompressor.com/ru/
Расстановка - скрипты перед </body>, css перед </head>. Дело в блокировке, хорошо отслеживается через события страницы: DOMContentLoaded и т.д.
Префиксы - https://autoprefixer.github.io/ru/. Кросс-браузерность.  

Минификатор CSS - https://www.toptal.com/developers/cssminifier/.
Минификатор JS - https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.5&externalPlugins=&assumptions=%7B%7D
Минификатор HTML - https://products.aspose.app/html/ru/minifier/html
Лучше создавать под них одноименные файлы с префиксом min.

Валидатор ошибок - https://validator.w3.org/unicorn/?ucn_lang=ru

# Иконки
Иконки для всех устройств - https://realfavicongenerator.net/
Если проблемы с доступом, то в настройках Debugger исправляется.

# SEO 

OpenGraph - формат, который позволяет корректно отобрать ссылку в соцсетях с превью.
https://ruogp.me/

Рекомендуется - всего 1 заголовок h1 на странице. Причем h1 в section относится не к странице, а к секции, поэтому поисковые роботы будут воспринимать его именно так. Лучше div.

# Администрирование

Это удобная система управления заголовками, текстами, другим контентом.
Готовые решения - это битрекс, вордпресс и т.д.

Настраиваемое - https://textolite.ru/ 

# css - переменная 

Классика
```
:root {
--primary-color: #fffff;
}

.title {
color: var(--primary-color);
}
```

Фулбэк - если нет основного стиля, то отработает фулбэк.

```
:root {
}

.title {
color: var(--primary-color, green);
}
```



