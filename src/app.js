const express = require('express')
const app = express()
app.use(express.json())
const  usersAll=[
    {
      "id":1,
      "firstName": "Sahid",
      "lastName": "Kick",
      "email": "sahid.kick@academlo.com",
      "password": "root",
      "age": 22
    }
]
let  iduser=usersAll.length+1
app.get('/', (req, res )=>{
    res.status(200).json({message: 'server OK!'})

})

app.get('/users', (req, res )=>{
    return res.status(200).json(usersAll)

})
app.post('/users', (req, res )=>{
    const usersPost=req.body
    let objuser= {
        "id":iduser++,
        "firstName": usersPost.firstName,
        "lastName": usersPost.lastName,
        "email": usersPost.email,
        "password": usersPost.password,
        "age": usersPost.age
      } 
    usersAll.push(objuser)
    res.status(201).json(objuser)
    
})
//!
app.get('/users/:id', (req, res )=>{
   const id= Number(req.params.id)

   const user= usersAll.find((item)=> item.id===id)
   if (user) {
    res.status(200).json(user)
   }else{
    res.status(404).json({message:'invalid ID!!!'})
   }
})

app.listen(9000, ()=>{
    console.log('lisetn server started');
})

module.exports = app
