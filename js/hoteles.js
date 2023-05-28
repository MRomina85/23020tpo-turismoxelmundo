const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',

            url: "http://demo0522475.mockable.io/hoteles", //json creado por el grupo en base a otros que encontramos
            hotelesALL: [],
            hotels: [],
            countryALL: [],
            country: [],   //este sirve para filtrar el país, estará adosado a cada html de continente
            cityALL: [],
            city: [], //esta ciudad se elige del buscador
            continent_name: [],

        }
    },
    methods: {
        fetchData(url) {
            fetch(url)     //trae los datos de la url
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.hotels = data.hotels
                    this.hotelesALL = data.hotels
                    //this.cargarListasDesplegables()

                })
                .catch(error => alert("Ups... se produjo un error: " + error))
        },
      
        
        /*cargarListasDesplegables() {
            this.countryAsia = []
            this.countryEurope = []
            this.countryAmerica = []
            this.countryAfrica = []

            for (elemento of this.hotelesALL) {

                if (elemento.continent_name == "Asia") {

                    if (elemento.country != '' && this.countryAsia.indexOf(elemento.country)) {
                        this.countryAsia.push(elemento.country)
                    }

                    if (elemento.city != '' && this.city.indexOf(elemento.city)) {
                        this.city.push(elemento.city)
                    }

                }
                if (elemento.continent_name == "Europe") {

                    if (elemento.country != '' && this.countryEurope.indexOf(elemento.country)) {
                        this.countryEurope.push(elemento.country)
                    }

                    if (elemento.city != '' && this.city.indexOf(elemento.city)) {
                        this.city.push(elemento.city)
                    }

                }
                if (elemento.continent_name == "South America" ||elemento.continent_name =="North America") {

                    if (elemento.country != '' && this.countryAmerica.indexOf(elemento.country)) {
                        this.countryAmerica.push(elemento.country)
                    }

                    if (elemento.city != '' && this.city.indexOf(elemento.city)) {
                        this.city.push(elemento.city)
                    }

                }
                if (elemento.continent_name == "Africa") {

                    if (elemento.country != '' && this.countryAfrica.indexOf(elemento.country)) {
                        this.countryAfrica.push(elemento.country)
                    }

                    if (elemento.city != '' && this.city.indexOf(elemento.city)) {
                        this.city.push(elemento.city)
                    }
                }
            }
        }*/

    },
    created() {
        this.fetchData(this.url)                                                         
    }
}).mount('#app')