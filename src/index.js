const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;

const clientRoutes = require("./routes/clients");
const employeeRoutes = require("./routes/employees");
const studentRoutes = require("./routes/students");
const playRoutes = require("./routes/plays");
const ticketRoutes = require("./routes/tickets");
const salesTicketRoutes = require("./routes/salesTickets");
const salesSnackRoutes = require("./routes/salesSnacks");
const inventorySnackRoutes = require("./routes/inventorySnack");
const snackRoutes = require("./routes/snack");
const providerRoutes = require("./routes/provider");

const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json()); 
//Gestión de las rutas usando el middleware
app.use("/api", clientRoutes);
app.use("/api", employeeRoutes);
app.use("/api", studentRoutes);
app.use("/api", playRoutes);
app.use("/api", ticketRoutes);
app.use("/api", salesTicketRoutes);
app.use("/api", salesSnackRoutes);
app.use("/api", inventorySnackRoutes);
app.use("/api", snackRoutes);
app.use("/api", providerRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose

    .connect(process.env.MONGODB_URI)

    .then(() => console.log("Conexión exitosa"))

    .catch((error) => console.log(error));

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});