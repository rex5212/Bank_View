// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comparacao from "App/Models/Comparacao"

export default class ComparacaosController {        
        
    async index(){
        return await Comparacao.query().preload("investidor")
                                       .preload("acoes")
                                       .preload("tesouros")
                                       .preload("calendario")
    }
 
    async store({request}){
        const dados = await request.validate()
        return Comparacao.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Comparacao.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await Comparacao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await Comparacao.findOrFail(id)
        delet.delete()
        return delet
    }

}
