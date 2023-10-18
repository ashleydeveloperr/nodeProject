import express from 'express'
import morgan from 'morgan'  // Nos permite ver el historial de consultas y peticiones 
import pkg from '../package.json'
import {createRoles} from './libs/initialSetup'

import productsRoutes  from './routes/products_routes'
import   authRoutes  from './routes/auth.routes'

const app = express();
createRoles();

app.set('pkg', pkg); // esta funcion nos permite crear una variable y settarla es decir, colocar un valor

app.use(morgan('dev'));
app.use(express.json()); //para que lea los objetos json que llegan desde el servidor

app.get('/', (req, res) => {  // app.get('/', --> Nos sirve para entrar a la url por deault ose a la primera localhost//: 
     res.json({
        name: app.get('pkg').name,
        version: app.get('pkg').version,
        author: app.get('pkg').author
     })
})



app.use('/products',productsRoutes)
app.use('/api/auth', authRoutes)






export default app;