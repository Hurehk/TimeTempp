//llamado a la conexion con Redis
/*
const redis = require("redis");
const redisConf={
    host: 'localhost',
    port:'6379',
    pass:''
};
const client = redis.createClient(redisConf);

client.on("error", function(error){
    console.error("Error encontrado: ", error);
});
client.on("conect", function(error){
    console.log("Redis conexion establecida");
});

client.set("ChanelName","CodeSpace",redis.print);
client.get("ChanelName",function(err, res){
    console.log(res);
};
*/

//Variable que se usara para la condicion que activara el fetch y obtendra los datos respectivos

var ciudad = 0;

//Capturar elementos del DOM
//Obtencion del value del boton que se selecciona
let Sant = document.getElementById("Santiago").value;
let Zur = document.getElementById("Zurich").value;
let Auck = document.getElementById("Auckland").value;
let Sydn = document.getElementById("Sydney").value;
let Lond = document.getElementById("Londres").value;
let Geor = document.getElementById("Georgia").value;

let temperatura = document.getElementById("temperaturaInfo");
let horas = document.getElementById("horasInfo");
let latitud = document.getElementById("latitudInfo");
let longitud = document.getElementById("longitudInfo");


//Funciones - API
//Cada funcion corresponde a uno de los botones de la interfaz, estas rescataran datos unicamente de la ciudad clickeada
//desde la API y los muestra en la interfaz

//Funciones DataZur y DataAuc, las deje sin ejemplo de visual en interfaz, pues las use de ejemplo para mostrar
//el funcionamiento del request con la API mediante console log, no logre mostrar los datos que se obtenian a la interfaz

function DataSant(){
    ciudad = Sant;
    if(ciudad !== 0){
        // Obtencion de datos a API con axios, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
        /*
        
        axios.get('http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query='+ciudad)
                .then(function(response){
                    console.log(response);
        })
                .catch(function(error){
                    console.log(error);
        })
                 .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
        });
        
        */
        
        
        
    /* // Obtencion de datos a API con fetch, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
     
         *
         *  
         * fetch("http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query="+ciudad)
            .then(res => res.json().then(console.log))
            .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
     });
    };
         
         */
        
        
        //Ejemplo de lo que deberia suceder
        document.getElementById("horasInfo").innerHTML="Hora: 11:34 pm";
        document.getElementById("temperaturaInfo").innerHTML="Temperatura: 22°c";
        document.getElementById("latitudInfo").innerHTML="Latitud: -123";
        document.getElementById("longitudInfo").innerHTML="Longitud: 321";
        ciudad = 0;
    }
};
function DataZur(){
    ciudad = Zur;
    if(ciudad !== 0){
        axios.get('http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query='+ciudad)
                .then(function(response){
                    console.log(response);
        })
                .catch(function(error){
                    console.log(error);
        })
                .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
        });
        ciudad = 0;
}};
function DataAuck(){
    ciudad = Auck;
    if(ciudad !== 0){
       
          fetch("http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query="+ciudad)
            .then(res => res.json().then(console.log))
            .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
     });
    };
        ciudad = 0;
    
};
function DataSydn(){
    ciudad = Sydn;
    if(ciudad !== 0){
        /* // Obtencion de datos a API con axios, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
         * 
         * 
        axios.get('http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query='+ciudad)
                .then(function(response){
                    console.log(response);
        })
                .catch(function(error){
                    console.log(error);
        })
                .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
        });
        
        
        */
        
        
    /* // Obtencion de datos a API con fetch, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
     
         *
         *  
         * fetch("http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query="+ciudad)
            .then(res => res.json().then(console.log))
            .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
     });
    };
         
         */
        
        
        //Ejemplo de lo que deberia suceder
        document.getElementById("horasInfo").innerHTML="Hora: 19:34 pm";
        document.getElementById("temperaturaInfo").innerHTML="Temperatura: 15°c";
        document.getElementById("latitudInfo").innerHTML="Latitud: -123";
        document.getElementById("longitudInfo").innerHTML="Longitud: 321";
        ciudad = 0;
    }
};
function DataLond(){
    ciudad = Lond;
    if(ciudad !== 0){
       /* // Obtencion de datos a API con axios, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
         * 
         * 
        axios.get('http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query='+ciudad)
                .then(function(response){
                    console.log(response);
        })
                .catch(function(error){
                    console.log(error);
        })
                .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
        });
        
        
        */
        
        
    /* // Obtencion de datos a API con fetch, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
     
         *
         *  
         * fetch("http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query="+ciudad)
            .then(res => res.json().then(console.log))
            .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
     });
    };
         
         */
        
        
        //Ejemplo de lo que deberia suceder
        document.getElementById("horasInfo").innerHTML="Hora: 21:34 pm";
        document.getElementById("temperaturaInfo").innerHTML="Temperatura: 14°c";
        document.getElementById("latitudInfo").innerHTML="Latitud: -123";
        document.getElementById("longitudInfo").innerHTML="Longitud: 321";
        ciudad = 0;
    }
};
function DataGeor(){
    ciudad = Geor;
    if(ciudad !== 0){
       /* // Obtencion de datos a API con axios, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
         * 
         * 
        axios.get('http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query='+ciudad)
                .then(function(response){
                    console.log(response);
        })
                .catch(function(error){
                    console.log(error);
        })
                .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
        });
        
        
        */
        
        
    /* // Obtencion de datos a API con fetch, exitosa. Problema: No se muestran datos rescatados de la API a la interfaz
     
         *
         *  
         * fetch("http://api.weatherstack.com/current?access_key=fa7831be1ea0ad3715f6e1c8c9f0a476&query="+ciudad)
            .then(res => res.json().then(console.log))
            .then(res =>{
                    document.getElementById("horasInfo").innerHTML="Hora: "+res.current.observation_time;
                    document.getElementById("temperaturaInfo").innerHTML="Temperatura: "+res.current.temperature;
                    document.getElementById("latitudInfo").innerHTML="Latitud: "+res.location.lat;
                    document.getElementById("longitudInfo").innerHTML="Longitud: "+res.location.lon;
     });
    };
         
         */
        
        
        //Ejemplo de lo que deberia suceder
        document.getElementById("horasInfo").innerHTML="Hora: 03:34 am";
        document.getElementById("temperaturaInfo").innerHTML="Temperatura: 12°c";
        document.getElementById("latitudInfo").innerHTML="Latitud: -123";
        document.getElementById("longitudInfo").innerHTML="Longitud: 321";
        ciudad = 0;
    }
};



