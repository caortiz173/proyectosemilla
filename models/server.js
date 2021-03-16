import express from 'express';
import cors from 'cors';
import dbConection from '../database/config.js';
import categoria from '../routes/categoria.js';
import usuario from '../routes/usuario.js';
import persona from '../routes/persona.js';
import articulo from '../routes/articulo.js';
import venta from '../routes/venta.js';
import compra from '../routes/compra.js';


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
        this.app.use('/api/categ',categoria),
        this.app.use('/api/user',usuario),
        this.app.use('/api/pers',persona),
        this.app.use('/api/artic',articulo),
        this.app.use('/api/vent',venta),
        this.app.use('/api/compr',compra)
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
