const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customerRoutes');
const hotelRoutes = require('./routes/hotelRoutes')
const reservationRoutes = require('./routes/reservationRoutes');


const app = express();

dotenv.config();

app.use('/api/customers', customerRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/reservations', reservationRoutes);


mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('We are connected to the database'))
    .catch(() => console.log('We are not connected to the database'));

app.listen(4000, () => console.log('Server is ready for requests.'));