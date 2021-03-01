import express from 'express';
import cors from 'cors';
import dbConection from '../database/config.js';


class Server{
    constructor(){
        this.port=process.env.PORT;

        //crear servidor}
        this.app = express();
        
        //conectar a la base de datos
        this.dbConexion();

        //middlewares
        this.middlewares();

        //rutas o routes 
        this.routes();
    }

    routes(){
        
    }

    async dbConexion(){
        await dbConection()
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`servidor corriendo en el puerto ${this.port}`);
        })
    }
}

 
// app.listen( process.env.PORT ,() => {
//     console.log(`servidor corriendo en el puerto ${process.env.PORT} - ctl + c para detener`);
// });

export {Server}
