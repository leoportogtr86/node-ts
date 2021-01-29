import * as express from 'express'

const app = express()



app.get('/', (req, res)=>{

    return res.send('hello node + ts')


})



app.listen(8080, ()=>{

    console.log('servidor rodando')
})