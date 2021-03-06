// Debug
console.log('JS OK!');

// Partendo dal template fornito renderizzare lo slider con Vue
// al click su una thumb, visualizzare in grande l'immagine corrispondente
// applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

// Config
const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const app = new Vue({
    el: '#app',
    data: {
        slides,
        activeSlideIndex: 0,
    },
    methods: {
        showPrevSlide() {
            if (this.activeSlideIndex > 0) {
                this.activeSlideIndex--;
            } else {
                this.activeSlideIndex = slides.length - 1;
            }
        },
        showNextSlide() {
            if (this.activeSlideIndex < slides.lenght - 1) {
                this.activeSlideIndex++;
            } else {
                this.activeSlideIndex = 0;
            }
        },
    }
});
