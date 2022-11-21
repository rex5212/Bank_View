// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Investidor from "App/Models/Investidor"
import InvestidorUpdateValidator from "App/Validators/InvestidorUpdateValidator"
import InvestidorValidator from "App/Validators/InvestidorValidator"

export default class InvestidorsController {        
        
    async index(){
        return await Investidor.query().preload("favoritos", (favoritoQuery)  => favoritoQuery.preload("acoes")
                                                                                              .preload("tesouros"))
                                       .preload("rentabilidades", (rentabilidadeQuery) => rentabilidadeQuery.preload("acoes")
                                                                                                            .preload("tesouros"))
                                       .preload("Comparacoes", (comparacaoQuery) => comparacaoQuery.preload("acoes")
                                                                                                   .preload("tesouros"))
    }
 
    async store({request}){
        const dados = await request.validate(InvestidorValidator)
        /** {nome, telefone, email, senha, cpf, assinaturaeletronica} = string*/
        return Investidor.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Investidor.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate(InvestidorUpdateValidator)
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