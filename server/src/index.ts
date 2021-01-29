import express from 'express'

const app = express()



app.get('/', (req, res)=>{

    return res.send({msg: 'hello express + typescript 2'})


})



app.listen(8080, ()=>{

    console.log('servidor rodando')
})