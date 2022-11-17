// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ComparacaoTesouro from "App/Models/ComparacaoTesouro"
import ComparacaoTesouroValidator from "App/Validators/ComparacaoTesouroValidator"

export default class ComparacaoTesourosController {
            
    async index(){
        return await ComparacaoTesouro.query().preload("comparacao")
                                              .preload("tesouro")
    }
 
    async store({request}){
        const dados = await request.validate(ComparacaoTesouroValidator)
        return ComparacaoTesouro.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = ComparacaoTesouro.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await ComparacaoTesouro.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await ComparacaoTesouro.findOrFail(id)
        delet.delete()
        return delet
    }

}
