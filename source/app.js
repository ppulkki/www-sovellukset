// Pauli Pulkkinen 0081769
// CT30A3202_03.09.2018 WWW-sovellukset
// Viikkotehtävä, vko 4
"use strict";

let app = null;
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
    app = new Vue({
        el: '#brand-list-example',
        data: {
            newBrandText: '',
            brands: [{
                    id: 1,
                    title: 'Skoda',
                },
                {
                    id: 2,
                    title: 'Nissan',
                },
                {
                    id: 3,
                    title: 'Volkswagen'
                }
            ],
            nextBrandId: 4
        },
        methods: {
            addNewBrand: function() {
                this.brands.push({
                    id: this.nextBrandId++,
                    title: this.newBrandText
                })
                this.newBrandText = ''
            }
        }
    })

});

Vue.component('brand-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\') " class="btn waves-effect waves-light">Poista<i class="material-icons right">delete_sweep</i></button>\
    </li>\
  ',
    props: ['title']
})
