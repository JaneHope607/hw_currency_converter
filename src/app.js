import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            rates: {},
            amountFromEuros: 0,
            amountToEuros: 0,
            selectedCurrency: null
        },

        mounted(){
            this.getRates()
        },

        computed: {
            calculatedFromEuro: function() {
                return this.convertFromEuro().toFixed(2);
            },

            calculatedToEuro: function() {
                return this.convertToEuro().toFixed(2);
            }
        },

        methods: {
            getRates: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(rates => this.rates = rates.rates)
            }, 

            convertFromEuro: function() {
                return this.amountFromEuros * this.selectedCurrency;
            },

            convertToEuro: function() {
                return this.amountToEuros / this.selectedCurrency;
            }
        }

    })

})