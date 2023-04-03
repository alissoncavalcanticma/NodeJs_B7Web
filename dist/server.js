"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
//import .env
dotenv_1.default.config();
//init server
const server = (0, express_1.default)();
//set view engine
server.set('view engine', 'mustache');
//set engine
server.engine('mustache', (0, mustache_express_1.default)());
//set public folder
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
//set views folder
server.set('views', path_1.default.join(__dirname, 'views'));
//set routes
server.use(index_1.default);
//set 404 not found default page
server.use((req, res) => {
    res.render('pages/404');
});
//server listen
server.listen(process.env.PORT);
