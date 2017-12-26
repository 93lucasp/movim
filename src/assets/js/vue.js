var itemsNavbar = [{
        text: 'Home',
        link: 'index.html',
        class: 'menu__home'
    },
    {
        text: 'Noleggio',
        link: 'noleggio.html',
        class: 'menu__noleggio'
    },
    {
        text: 'Energy',
        link: 'energy.html',
        class: 'menu__energy'
    },
    {
        text: 'Tech',
        link: 'tech.html',
        class: 'menu__tech'
    },
    {
        text: 'Apertura nuovi punti',
        link: 'nuovi-punti.html',
        class: 'menu__punti'
    },
    {
        text: 'Contatti',
        link: 'contatti.html',
        class: 'menu__contatti'
    }
];

var heros = {
    home: {
        title: 'Il Futuro per',
        titleEvidence: 'la tua azienda',
        subTitle: 'Consulenza in vari settori per soddisfare tutti i tuoi bisogni aziendali'
    },
    noleggio: {
        title: 'Passa al noleggio a',
        titleEvidence: 'lungo termine',
        subTitle: 'Rata certa e fissa, tutti i modelli disponibili.'
    },
    energy: {
        title: 'Efficenta la tua azienda',
        subTitle: 'Garantisci un risparmio alla tua futura impresa'
    },
    punti: {
        title: 'Vuoi aprire il tuo punto Movim?',
        subTitle: 'Sei alla ricerca di un’attività nella quale investire ma non sai cosa scegliere? '
    },
    tech: {
        title: 'Presenta la tua azienda!',
        subTitle: 'Video continuativi, intelligenze artificiali e molto altro'
    }
};


Vue.component('vue-item', {
    props: ['item'],
    template: '<li v-bind:class="item.class">  <a v-bind:href="item.link"> {{ item.text }} </a>  </li>'
});

Vue.component('vue-hero', {
    props: ['hero'],
    template: '<div>\
        <div class="container">\
            <div class="row">\
                <div class="col-lg-4 mx-lg-auto">\
                    <h1 class="font-weight-light">{{hero.title}} <span class="font-weight-bold"> {{hero.titleEvidence}}</span></h1>\
                    <p>{{hero.subTitle}}</p>\
                    <div class="lineBold mt-2"></div>\
                </div>\
            </div>\
        </div>\
    </div>'
});
Vue.component('vue-footer', {
    template: '<footer class="footer">\
        <div class="container">\
            <div class="row">\
                <div class="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start ">\
                    <img src="./assets/images/arrow-dark.svg" alt="">\
                </div>\
                <div class="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">\
                    <ul>\
                        <li>\
                            <a href="">Chi siamo</a>\
                        </li>\
                        <li>\
                            <a href="">Dove siamo</a>\
                        </li>\
                        <li>\
                            <a href="">Contatti</a>\
                        </li>\
                    </ul>\
                </div>\
                <div class="col-lg-2 d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">\
                    <ul class="social">\
                        <li>\
                            <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>\
                        </li>\
                        <li>\
                            <a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>\
                        </li>\
                        <li>\
                            <a href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </div>\
    </footer>'
});

new Vue({
    el: '#app',
    data: {
        items: itemsNavbar,
        openMenu: false,
        show: true,
        heros: heros
    }
});