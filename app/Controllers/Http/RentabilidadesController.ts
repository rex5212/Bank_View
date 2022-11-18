// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Rentabilidade from "App/Models/Rentabilidade"
import RentabilidadeValidator from "App/Validators/RentabilidadeValidator"

export default class RentabilidadesController {        
        
    async index(){
        return await Rentabilidade.query().preload("investidor")
                                          .preload("acoes")
                                          .preload("tesouros")
                                          .preload("calendario")
    }
 
    async store({request}){
        const dados = await request.validate(RentabilidadeValidator)
        return Rentabilidade.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Rentabilidade.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await Rentabilidade.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Rentabilidade.findOrFail(id)
        delet.delete()
        return delet
    }

}