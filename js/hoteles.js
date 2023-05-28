const { createApp } = Vue

createApp({
    data() {
        return {
            
            message: 'Hello !',

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
                    

                })
                .catch(error => alert("Ups... se produjo un error: " + error))
        },
      
    },
    created() {
        this.fetchData(this.url)                                                         
    }
}).mount('#app')