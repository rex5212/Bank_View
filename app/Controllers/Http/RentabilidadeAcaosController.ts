// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import RentabilidadeAcao from "App/Models/RentabilidadeAcao"
import RentabilidadeAcaoValidator from "App/Validators/RentabilidadeAcaoValidator"

export default class RentabilidadeAcaosController {
            
    async index(){
        return await RentabilidadeAcao.query().preload("acao")
                                              .preload("rentabilidade")
    }
 
    async store({request}){
        const dados = await request.validate(RentabilidadeAcaoValidator)
        return RentabilidadeAcao.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = RentabilidadeAcao.findBy('id', id)
        return show
    }
 
    async update({request}){        
        const id = request.param("id")
        const dados = await request.validate()
        const updat = await RentabilidadeAcao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){         
        const id = request.param("id")
        const delet = await RentabilidadeAcao.findOrFail(id)
        delet.delete()
        return delet
    }

}
