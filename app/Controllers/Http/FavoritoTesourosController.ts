// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FavoritoTesouro from "App/Models/FavoritoTesouro"
import FavoritoTesouroValidator from "App/Validators/FavoritoTesouroValidator"

export default class FavoritoTesourosController {        
        
    async index(){
        return await FavoritoTesouro.query().preload("favorito")
                                            .preload("tesouro")
    }
 
    async store({request}){
        const dados = await request.validate(FavoritoTesouroValidator)
        return FavoritoTesouro.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = FavoritoTesouro.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await FavoritoTesouro.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await FavoritoTesouro.findOrFail(id)
        delet.delete()
        return delet
    }

}