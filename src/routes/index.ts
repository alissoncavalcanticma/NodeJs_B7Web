//imports
import {Router, Request, Response} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

//defining const router
const router = Router();

//defining router using PageController
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//defining router using SearchController
router.get('/search', SearchController.search);

//export const router
export default router;