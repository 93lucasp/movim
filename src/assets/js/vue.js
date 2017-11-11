var itemsNavbar = [{
        text: 'Chi siamo',
        link: 'chisiamo.html'
    },
    {
        text: 'Rent',
        link: 'rent.html'
    },
    {
        text: 'Credit',
        link: 'credit.html'
    },
    {
        text: 'Green',
        link: 'green.html'
    },
    {
        text: 'Digital',
        link: 'digital.html'
    },
    {
        text: 'Contatti',
        link: 'contatti.html'
    }
];

Vue.component('vue-item', {
    props: ['item'],
    template: '<li>  <a :href="item.link"> {{ item.text }} </a>  </li>'
});

new Vue({
    el: '#navBar',
    data: {
        items: itemsNavbar
    }
});