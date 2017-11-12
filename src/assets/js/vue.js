var itemsNavbar = [{
        text: 'Chi siamo',
        link: 'chisiamo.html',
        class: 'menu__chiSiamo'
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



Vue.component('vue-item', {
    props: ['item'],
    template: '<li v-bind:class="item.class">  <a v-bind:href="item.link"> {{ item.text }} </a>  </li>'
});

new Vue({
    el: '#navBar',
    data: {
        items: itemsNavbar,
        openMenu: false,
        show: true
    }
});
