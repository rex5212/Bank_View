// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Calendariocomparacao from "App/Models/Calendariocomparacao"
import CalendarioComparacaoUpdateValidator from "App/Validators/CalendarioComparacaoUpdateValidator"
import CalendarioComparacaoValidator from "App/Validators/CalendarioComparacaoValidator"

export default class CalendariocomparacaosController {        
        
    async index(){
        return await Calendariocomparacao.query().preload("comparacao", (comparacaoQuery) => comparacaoQuery.preload("acoes")
                                                                                                            .preload("tesouros")
                                                                                                            .preload("investidor"))
    }
 
    async store({request}){
        const dados = await request.validate(CalendarioComparacaoValidator)
        /** {comparacaoId} = number, {tempoinit, tempoend} = date */
        return Calendariocomparacao.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Calendariocomparacao.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate(CalendarioComparacaoUpdateValidator)
        const updat = await Calendariocomparacao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Calendariocomparacao.findOrFail(id)
        delet.delete()
        return delet
    }

}