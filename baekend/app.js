import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import { readAll } from './storage/stor.js'
config()

const app = express()

app.use(express.json());
app.use(cors());

app.get('/api/movies',async(req,res)=>{
    try {
        
        const moves = await readAll('data.json')
        const resualt = moves.map((move)=>({
            id: move.imdbID,
            title: move.Title,
            year: move.Year,
            rating: move.Rated,
            runtime: move.Runtime,
            genres: move.Genre.split(", "),
            overview: move.Plot,
            posterUrl: move.Poster,
            Language: move.Language
        }))
        res.json( resualt )

    } catch (error) {
        res.status(500).json({error})
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`server run on http://localhost:${process.env.PORT}`);
})