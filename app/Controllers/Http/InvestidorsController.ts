// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Investidor from "App/Models/Investidor"

export default class InvestidorsController {        
        
    async index(){
        return await Investidor.query().preload("favoritos")
                                       .preload("rentabilidades")
                                       .preload("Comparacoes")
    }
 
    async store({request}){
        const dados = await request.validate()
        return Investidor.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Investidor.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await Investidor.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Investidor.findOrFail(id)
        delet.delete()
        return delet
    }

}