const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.listen(3002, () => {
    console.log('Server is running in port 3002')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'pruebas'
})

app.post('/UsersReg', (req, res) =>{
    const sentFirstName = req.body.FirstName
    const setSecondName = req.body.SecondName
    const setFirstLastName = req.body.FirstLastName
    const setSecondLastName = req.body.SecondLastName
    const setCountry = req.body.Country
    const setBirthday = req.body.Birthday
    const setEmail = req.body.Email
    const setCountryHome = req.body.CountryHome
    const setPassword = req.body.Password
    const setUserName = req.body.UserName
    const setID = req.body.ID

    const SQL = 'INSERT INTO clientes (ID,primerNombre, segundoNombre, primerApellido, segundoApellido, lugarNacimiento, fechaNacimiento, correoElectronico, direccionCorrespondencia, contraseña, usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)'

    const Values = [setID,
        sentFirstName,
        setSecondName, 
        setFirstLastName, 
        setSecondLastName, 
        setCountry, 
        setBirthday, 
        setEmail, 
        setCountryHome, 
        setPassword,
        setUserName]

    db.query(SQL, Values, (err, results) =>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully')
            res.send({message: 'User Added'})
        }
    })
})

app.post('/LoginUsers', (req, res) =>{
    
    const sentLoginPassword = req.body.LoginPassword
    const sentLoginUserName = req.body.LoginUserName

    const SQL = 'SELECT * FROM clientes WHERE usuario = ? && contraseña = ?'

    const Values = [sentLoginUserName, sentLoginPassword]

    db.query(SQL, Values, (err, results) =>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
            console.log(SQL)
            console.log(Values)
        }
        else{
            res.send({message: 'Las credenciales no concuerdan'})
        }
    })
})