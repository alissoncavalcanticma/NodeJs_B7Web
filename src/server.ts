//imports
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//import .env
dotenv.config();

//init server
const server = express();

//set view engine
server.set('view engine', 'mustache');
//set engine
server.engine('mustache', mustache());

//set public folder
server.use(express.static(path.join(__dirname, '../public')));
//set views folder
server.set('views', path.join(__dirname, 'views'));

//set routes
server.use(mainRoutes);

//set 404 not found default page
server.use((req, res)=>{
    res.send('Page not found!');
})

//server listen
server.listen(process.env.PORT);