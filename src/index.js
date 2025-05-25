import express from 'express';
import { PORT } from './config/index.js';
import apiRoutes from './routes/index.js';
import db from './models/index.js';
const City = db.city;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRoutes);

app.listen(PORT, async() => {
    console.log(`Server is running on port: ${PORT}`);
    // const city = await City.findByPk(12);
    // //await city.createAirport({name: 'Prayagraj Airport',code: 'PYJ'});
    // await City.destroy({
    //     where:{
    //         id:12
    //     }
    // })
})