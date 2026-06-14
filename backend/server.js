const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const MONGO_URI =
"mongodb://localhost:27017/healthapp";

mongoose.connect(MONGO_URI)

.then(() => {

    console.log("🚀 Connected to MongoDB successfully!");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

})

.catch(err => {

    console.log("MongoDB Error:", err);

});



const appointmentSchema = new mongoose.Schema({

    name: String,
    age: Number,
    disease: String,
    date: String

});



const Appointment =
mongoose.model("Appointment", appointmentSchema);



// POST API
app.post("/appointments", async (req, res) => {

    try {

        console.log(req.body);

        const appointment =
        new Appointment(req.body);

        await appointment.save();

        res.json({
            message: "Appointment Saved Successfully"
        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

});



// GET API
app.get("/appointments", async (req, res) => {

    const data =
    await Appointment.find();

    res.json(data);

});
//delete  appointment
app.delete("/appointments/:id", async (req, res) => {

    try {

        await Appointment.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Appointment Deleted"
        });

    } catch (error) {

        res.status(500).json(error);

    }

});