// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Calendariorentabilidade from "App/Models/Calendariorentabilidade"
import CalendarioRentabilidadeUpdateValidator from "App/Validators/CalendarioRentabilidadeUpdateValidator"
import CalendarioRentabilidadeValidator from "App/Validators/CalendarioRentabilidadeValidator"

export default class CalendariorentabilidadesController {        
        
    async index(){
        return await Calendariorentabilidade.query().preload("rentabilidade", (rentabilidadeQuery) => rentabilidadeQuery.preload('acoes')
                                                                                                                        .preload('tesouros')
                                                                                                                        .preload("investidor"))
    }
 
    async store({request}){
        const dados = await request.validate(CalendarioRentabilidadeValidator)
        /** {rentabilidadeId} = number, {tempoinit, tempoend} = date */
        return Calendariorentabilidade.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Calendariorentabilidade.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate(CalendarioRentabilidadeUpdateValidator)
        const updat = await Calendariorentabilidade.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Calendariorentabilidade.findOrFail(id)
        delet.delete()
        return delet
    }

}