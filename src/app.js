import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            rates: {},
            amount: 0,
            selectedCurrency: null
        },


        computed: {
            calculatedFromEuro: function() {
                return this.convertFromEuro().toFixed(2);
            }
        },

        mounted(){
            this.getRates()
        },

        methods: {
            getRates: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(rates => this.rates = rates.rates)
            }, 

            convertFromEuro: function() {
                return this.amount * this.selectedCurrency;
            }
        }

    })

})