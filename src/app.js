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
        },

        mounted(){
            this.getRates()
        },

        computed: {

            // avoid changing ANYTHING IN THE DATA OBJECT!!
            // DON'T EVER RETURN AN EQUAL STATEMENT 

            calculatedFromEuro: function() {
                const convertedFromEuros = this.amountFromEuros * this.baseCurrency;
                return convertedFromEuros.toFixed(2);
            },

            calculatedToEuro: function() {
                const convertedToEuros = this.amountToEuros / this.endCurrency;
                return convertedToEuros.toFixed(2);
            }
        },

        methods: {
            getRates: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(rates => this.rates = rates.rates)
            }, 
        }

    })

})