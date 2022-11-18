// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ComparacaoAcao from "App/Models/ComparacaoAcao"
import ComparacaoAcaoValidator from "App/Validators/ComparacaoAcaoValidator"

export default class ComparacaoAcaosController {
            
    async index(){
        return await ComparacaoAcao.query().preload("acao")
                                           .preload("comparacao")
    }
 
    async store({request}){
        const dados = await request.validate(ComparacaoAcaoValidator)
        return ComparacaoAcao.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = ComparacaoAcao.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await ComparacaoAcao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await ComparacaoAcao.findOrFail(id)
        delet.delete()
        return delet
    }

}
