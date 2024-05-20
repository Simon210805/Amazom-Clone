/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();
setGlobalOptions({
  maxInstances: 10
});
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Firebase!" });
})
app.post("/payments/create", async (req, res) => {
    const total = parseInt (req.query.total);
    if (total > 0) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
        console.log(paymentIntent)
      res.status(201).json({ clientSecret: paymentIntent.client_secret });
    }else{
      res.status(403).json({message: "total amount must be greater than zero"})
    }
    });
    


exports.api = onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
