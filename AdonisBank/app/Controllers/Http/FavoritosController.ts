// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Favorito from "App/Models/Favorito"
import FavoritoUpdateValidator from "App/Validators/FavoritoUpdateValidator"
import FavoritoValidator from "App/Validators/FavoritoValidator"

export default class FavoritosController {        
        
    async index(){
        return await Favorito.query().preload("investidor")
                                     .preload("acoes")
                                     .preload("tesouros")
    }
 
    async store({request}){
        const dados = await request.validate(FavoritoValidator)
        /** {nome} = string, {investidorId} = number */
        return Favorito.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Favorito.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate(FavoritoUpdateValidator)
        const updat = await Favorito.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Favorito.findOrFail(id)
        delet.delete()
        return delet
    }

}