import { Router } from "express";
import { PaymentController } from "../controllers/payment.controller.js";


const router = Router()



router.post("/create-order", PaymentController.createOrder)

router.get("/success", (req, res) => res.send("Success"))

router.get("/failure", (req, res) => res.send("Failure"))

router.get("/pending", (req, res) => res.send("Pending"))

router.post("/webhook", PaymentController.webhook)


export {router as routerPayment}