import {Request, Response} from 'express';

import {Pet} from '../models/pet';
import {createMenuObject} from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {

    let nome: string = req.query.q as string;

    if(!nome){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(nome);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        nome

    });
}