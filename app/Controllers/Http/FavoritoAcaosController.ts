// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FavoritoAcao from "App/Models/FavoritoAcao"
import FavoritoAcaoValidator from "App/Validators/FavoritoAcaoValidator"

export default class FavoritoAcaosController {        
        
    async index(){
        return await FavoritoAcao.query().preload("acao")
                                         .preload("favorito")
    }
 
    async store({request}){
        const dados = await request.validate(FavoritoAcaoValidator)
        return FavoritoAcao.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = FavoritoAcao.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await FavoritoAcao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await FavoritoAcao.findOrFail(id)
        delet.delete()
        return delet
    }

}