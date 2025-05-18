const express= require("express")
const dotenv=require("dotenv")
const cors=require("cors") 
const connectDb=require("./config/database")
const bcrypt=require("bcryptjs")
const app=express()
app.use(express.json())
dotenv.config()
connectDb()
const CarInsuranceRoutes = require ('./routes/CarInsuranceRoute')
const BikeInsuranceRoutes = require('./routes/BikeInsurance.js');
const HealthInsuranceRoutes = require('./routes/HealthInsuranceRoute');
const TermInsuranceRoutes = require('./routes/TermInsuranceRoute');
const InvestmentInsuranceRoutes = require('./routes/InvestmentRoute');
const AuthRoutes = require('./routes/AuthRoute')
const payment = require('./routes/payment')

app.use(cors({
    origin:process.env.FRONTEND_URI,
    credentials:true,
}))

app.use('/api/car-insurance', CarInsuranceRoutes);
app.use('/api/bike-insurance', BikeInsuranceRoutes);
app.use('/api/health-insurance', HealthInsuranceRoutes);
app.use('/api/term-insurance', TermInsuranceRoutes);
app.use('/api/auth', AuthRoutes);



app.use('/api/investment-insurance', InvestmentInsuranceRoutes);

app.use('/api/payment', payment)





app.listen(process.env.PORT,()=>console.log(`port is running on ${process.env.PORT}`))