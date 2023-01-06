const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = 9000
const jsonToTable = require('json-to-table');

var obj = {
    "id": "06",
    "Name": "Arun Agarwal",
    "Age": "27",
    "Department": "ENT",
    "Years_experience": "8",
    "Specialization": "Paediatric",
    "Salary": "500000"

}

app.use(express.static('public'));

//start server at port 9000
app.listen(port, () => console.log(`Server listening on port ${port}`))
app.use(express.static(path.join(__dirname, '../frontend/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/View', (req, res) => {
    fs.readFile('./clinical.json', (err, data) => {
        if (!err) {
            res.write(data)
            res.end()
            return
        }
        res.write("Error reading Employee.json file")
        res.end()
        console.log("Error reading Employee.json file")
    })
})


app.get('/AddDoctor', (req, res) => {
    fs.readFile('./clinical.json', (err, data) => {
        if (!err) {
            var updated = JSON.parse(data)
            updated.push(obj)
            fs.writeFile('./clinical.json', JSON.stringify(updated, null, 2), (err) => {
                if (!err) {
                    console.log("File Write Successful")
                } else {
                    console.log(err)
                }
            })
        }
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
})