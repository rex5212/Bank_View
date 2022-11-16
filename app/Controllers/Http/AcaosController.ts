// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Acao from "App/Models/Acao"

export default class AcaosController {
        
    async index(){
        return await Acao.query().preload("favoritos", (favoritosQuery) => favoritosQuery.preload("investidor"))
                                 .preload("rentabilidades", (retabilidadesQuery) => retabilidadesQuery.preload("investidor"))
                                 .preload("comparacoes", (comparacoesQuery) => comparacoesQuery.preload("investidor"))
    }
 
    async store({request}){
        const dados = await request.validate()
        return Acao.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Acao.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await Acao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Acao.findOrFail(id)
        delet.delete()
        return delet
    }

}
