const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const doctorHandler = require('./routeHandler/doctorHandler');
const blogHandler = require('./routeHandler/blogHandler');
const appointmentHandler = require('./routeHandler/appointmentHandler');




// express app intialization
const app = express();
app.use(express.json());
// MiddleWare
app.use(cors());



// Database connection with mongoose
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err));


// Application route
app.use('/doctor', doctorHandler);
app.use('/blog', blogHandler);
app.use('/appointment', appointmentHandler);






// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {

//         const myDB = client.db('DoctorPointProject')
//         const doctorsColl = myDB.collection('doctorsData');
//         const blogsColl = myDB.collection('blogsData');
//         const appointmentColl = myDB.collection('appointmentData');
//         //=======================================================

//         // Get all doctors data
//         app.get('/doctors', async (req, res) => {
//             const query = {};
//             const result = await doctorsColl.find(query).toArray();
//             res.send(result);
//         });

//         // Get Single doctor data
//         app.get('/doctor/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) };
//             const result = await doctorsColl.findOne(query)
//             res.send(result);
//         })

//         // Get all blogs data
//         app.get('/blog', async (req, res) => {
//             const query = {};
//             const result = await blogsColl.find(query).toArray();
//             res.send(result);
//         });

//         // Get single blog data
//         app.get('/blog/:id', async (req, res) => {
//             const id = req.params.id;
//             const query = { _id: new ObjectId(id) };
//             const result = await blogsColl.findOne(query);
//             res.send(result);
//         });

//         //get all appointments
//         app.get('/appointment', async(req, res)=>{
//             const query = {};
//             const result = await appointmentColl.find(query).toArray();
//             res.send(result);
//         });

//         // Get using email Appointments
//         app.get('/appointment', async (req, res) => {
//             const qemail = req.query.email;
//             const query = {
//                 'user.email': qemail
//             };
//             const result = await appointmentColl.find(query).toArray();
//             res.send(result);
//         });

//         // Post Appointments
//         app.post('/appointment', async (req, res) => {
//             const appointmentData = req.body;
//             const result = await appointmentColl.insertOne(appointmentData);
//             res.send(result);
//         });






//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         //await client.close();
//     }
// }
// run().catch(console.dir);



// app.get('/', (req, res) => {
//     res.send("Doctor Appointment Backed Server");
// });

// default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});

