const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = 4000;

// MiddleWare
app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.wcol5mf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const myDB = client.db('DoctorPointProject')
        const doctorsColl = myDB.collection('doctorsData');
        const blogsColl = myDB.collection('blogsData');
        const appointmentColl = myDB.collection('appointmentData');
        //=======================================================

        // Get all doctors data
        app.get('/doctors', async (req, res) => {
            const query = {};
            const result = await doctorsColl.find(query).toArray();
            res.send(result);
        });

        // Get Single doctor data
        app.get('/doctor/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await doctorsColl.findOne(query)
            res.send(result);
        })

        // Get all blogs data
        app.get('/blog', async (req, res) => {
            const query = {};
            const result = await blogsColl.find(query).toArray();
            res.send(result);
        });

        // Get single blog data
        app.get('/blog/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await blogsColl.findOne(query);
            res.send(result);
        });



        // Get Appointments
        app.get('/appointment', async (req, res) => {

        });

        // Post Appointments
        app.post('/appointment', async (req, res) => {
            const appointmentData = req.body;
            const result = await appointmentColl.insertOne(appointmentData);
            res.send(result);
        });






        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Doctor Appointment Backed Server");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

