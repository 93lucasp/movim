var itemsNavbar = [{
        text: 'Home',
        link: 'home.html',
        class: 'menu__home'
    },
    {
        text: 'Rent',
        link: 'rent.html',
        class: 'menu__rent'
    },
    {
        text: 'Credit',
        link: 'credit.html',
        class: 'menu__credit'
    },
    {
        text: 'Green',
        link: 'green.html',
        class: 'menu__green'
    },
    {
        text: 'Digital',
        link: 'digital.html',
        class: 'menu__digital'
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
        titleEvidence: 'la tua impresa',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    green: {
        title: 'Il Futuro per la tua impresadasddasddasd',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
                <div class="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end ">\
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
    el: '#home',
    data: {
        items: itemsNavbar,
        openMenu: false,
        show: true,
        heros: heros
    }
});