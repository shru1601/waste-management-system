const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const fileUpload = require('express-fileupload');
//import { LocalStorage } from 'node-localstorage';
// const localStorage = require("localstorage");
const { data } = require('jquery');
require('dotenv').config();

const app = express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

console.log({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
})

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload());
// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

var file_path;

// GET: Fetch all data from the database
app.get('/', (req, res) => {
    db.select('*')
        .from('schema_wsm.register')
        .then((data) => {
            console.log(data,"fetched all data");
            res.json(data);
            console.log(req.body);
        })
        .catch((err) => {
            console.log(err);
        });
      
    });

    

////////////////////////////////////////////////////////////////****************///////////////////////////////////////////////////////////////////////////////
app.post('/', function(req, res) {

    var data = req.body;
    // var id = data.id;

    var query = "SELECT category FROM schema_wsm.register WHERE id=" + id;
    
    connection.query(query, function(error, result) {
        console.log(result);
        res.send(result);
    });

});

///////////////////////////////////////////////////////////////****************///////////////////////////////////////////////////////////////////////////////
app.post('/upload', (req, res) => {
    file_path=null;
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    file_path = `${__dirname}/file-upload/${myFile.name}`;
    myFile.mv(file_path, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

// POST: Add/insert the data to the database
app.post('/api/data', (req, res) => {
    console.log('*****************************************');
    console.log(req.body);
    
    const { name, address, mobile, email, gender, category, password, idproof } = req.body;
    // console.log(path);
    // const file_path = path;
    db('schema_wsm.register')
        .insert({
            name: name,
            mobileno: mobile,
            emailid: email,
            address: address,
            gender: gender,
            category: category,
            password: password,
            idproof: idproof,
            filePath:file_path
        })
        .then(() => {
            console.log('Data Added in registration table');
            return res.json({ msg: 'Data Added in registration table' });
        })
        .catch((err) => {
            console.log(err);
        });
});


//insert into login table
app.post('/api/data/login', (req, res) => {
    
    console.log('*****************************************');
    console.log(req.body);
    const { email, password, category } = req.body;
    // console.log(path);
    // const file_path = path;
    db('schema_wsm.login')
        .insert({
            emailid: email,
            password: password,
            category: category
        })
        .then(() => {
            console.log('Data Added in login table');
            return res.json({ msg: 'Data Added in login table' });
        })
        .catch((err) => {
            console.log(err);
        });
});



// const port = process.env.PORT || 5000;
// const port = 3000;

// app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));


// ===================================================





// ======================================================




app.post('/api/data/cart', (req, res) => {
    console.log(req.body,"Res");
    console.log('*****************************************');

    const { data } = req.body;
    // var  arr_data = data.split()[0]
   const arr_data = JSON.parse(data);
   console.log(arr_data)
    // const newData = arr_data.map((ele)=>{
    //     return ele;
    // })
    // const d = newData[0];
    // console.log(d.name)


    // console.log(path);

    // const file_path = path;
  
    arr_data.forEach(d => {
        db('schema_wsm.cart')
          .insert({
            name: d.name,
            price: d.price,
            count: d.count,
            total: d.total
          })
          .then(() => {
            console.log('Data inserted successfully');
          })
          .catch(error => {
            console.error('Error inserting data:', error);
          });
      });
});



const port = process.env.PORT || 5000;
// const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));