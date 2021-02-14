import express from 'express'

const app = express()



app.get('/', (req, res)=>{

    return res.send({msg: 'hello express + typescript 10'})


})



app.listen(8080, ()=>{

    console.log('servidor rodando')
})