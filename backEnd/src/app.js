import express from "express"
import morgan from "morgan"
import { routerPayment } from "./routes/payment.routes.js"
import { config } from "./config/config.js"
import cors from "cors"



const app = express()
const port = config.server.port


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))



app.listen(port, ()=> console.log("Server up on port", port))



//Route
app.use("/api/payment", routerPayment)