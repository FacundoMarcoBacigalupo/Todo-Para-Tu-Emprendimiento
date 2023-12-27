import dotenv from "dotenv";
dotenv.config();


export const config = {
    server:{
        port: process.env.PORT || 8080,
    },
    mercadoPago:{
        mercadoPagoApiKey: process.env.MERCADOPAGO_API_KEY || "TEST-3137422391929679-111816-b5ea73a8789bac9adb9d58dfb722430a-1154540748",
    }
};