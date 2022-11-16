// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import RentabilidadeTesouro from "App/Models/RentabilidadeTesouro"

export default class RentabilidadeTesourosController {
            
    async index(){
        return await RentabilidadeTesouro.query().preload("rentabilidade")
                                                 .preload("tesouro")
    }
 
    async store({request}){
        const dados = await request.validate()
        return RentabilidadeTesouro.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = RentabilidadeTesouro.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await RentabilidadeTesouro.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await RentabilidadeTesouro.findOrFail(id)
        delet.delete()
        return delet
    }

}
