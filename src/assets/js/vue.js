var itemsNavbar = [
    {
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
    }};


Vue.component('vue-item', {
    props: ['item'],
    template: '<li v-bind:class="item.class">  <a v-bind:href="item.link"> {{ item.text }} </a>  </li>'
});

Vue.component('vue-hero', {
    props: ['hero'],
    template: 
    '<div>\
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

new Vue({
    el: '#hero',
    data: {
        heros: heros
    }
});

new Vue({
    el: '#navBar',
    data: {
        items: itemsNavbar,
        openMenu: false,
        show: true
    }
});
