import { db } from "../../../services/firebase"
import { child, get, ref, remove, set, update } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

    const id = req.query.id

    if (req.method == 'GET') {

        get(child(ref(db), 'noticia/' + id)).then(snapshot=>{
            res.status(200).json(snapshot.val())
        })

    } else if (req.method == 'PUT' || req.method == 'PATCH') {
        
        const dados = req.body

        update(ref(db, 'noticia/' + id), dados)
        res.status(200).json(dados)

    } else if (req.method == 'DELETE') {
        remove(ref(db, 'noticia/' + id))
        res.status(200).json(id)
    }
}