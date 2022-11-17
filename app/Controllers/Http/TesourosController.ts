// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tesouro from "App/Models/Tesouro"
import TesouroValidator from "App/Validators/TesouroValidator"

export default class TesourosController {        
        
    async index(){
        return await Tesouro.query().preload("favoritos")
                                    .preload("comparacoes")
                                    .preload("rentabilidades")
    }
 
    async store({request}){
        const dados = await request.validate(TesouroValidator)
        return Tesouro.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Tesouro.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await Tesouro.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Tesouro.findOrFail(id)
        delet.delete()
        return delet
    }

}