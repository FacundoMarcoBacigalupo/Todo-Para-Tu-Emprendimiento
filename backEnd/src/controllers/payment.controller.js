import mercadopage from "mercadopago";
import { config } from "../config/config.js";



export class PaymentController{
    static createOrder = async(req, res) =>{
        mercadopage.configure({
            access_token: config.mercadoPago.mercadoPagoApiKey,
        });
        let {title, description, price} = req.body
        
        try {
            let result = await mercadopage.preferences.create({
                items: [
                    {
                    id: 1234,
                    title: title,
                    currency_id: "ARS",
                    description: description,
                    quantity: 10,
                    unit_price: parseInt(price)
                    },
                ],
                notification_url: "http://localhost:8080/api/payment/webhook",
                back_urls: {
                    success: "http://localhost:8080/api/payment/success",
                    pending: "http://localhost:8080/api/payment/pending",
                    failure: "http://localhost:8080/api/payment/failure",
                },
                auto_return: "approved",
                binary_mode: true
                });
            res.status(200).send.json(result.body);
        }
        catch (error) {
            console.log(error.message)
            return res.status(500).json({ message: "Something goes wrong" });
        }
    };


    static webhook = async(req, res) => {
        try {
            const payment = req.query;
            console.log(payment);
            if (payment.type === "payment") {
                const data = await mercadopage.payment.findById(payment["data.id"]);
                console.log(data);
            }
        
            res.sendStatus(204);
        }
        catch (error) {
            console.log(error.message);
            return res.status(500).json({ message: "Something goes wrong" });
        }
    }
};