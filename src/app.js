import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            rates: {},
            baseCurrency: null,
            endCurrency: null,
            amountFromEuros: 0,
            amountToEuros: 0,
            convertedFromEuros: 0,
            convertedToEuros: 0,
            currencyHelper: ""
        },

        mounted(){
            this.getRates()
        },

        computed: {
            // calculatedFromEuro: function() {
            //     return this.convertFromEuro().toFixed(2);
            // },

            // calculatedToEuro: function() {
            //     return this.convertToEuro().toFixed(2);
            // }
        },

        methods: {
            getRates: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(rates => this.rates = rates.rates)
            }, 

            convertFromEuro: function() {
                const calculatedFromEuro = this.amountFromEuros * this.baseCurrency
                this.convertedFromEuros = calculatedFromEuro.toFixed(2);
            },

            convertToEuro: function() {
                const calculatedToEuro = this.amountToEuros / this.endCurrency
                this.convertedToEuros = calculatedToEuro.toFixed(2);
            }
        }

    })

})