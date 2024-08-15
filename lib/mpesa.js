import base64 from "base-64";
import dotenv from "dotenv";
dotenv.config();

const simulate = {
  ShortCode: "174379",
  CommandID: "CustomerBuyGoodsOnline",
  Amount: "1",
  Msisdn: "254708374149",
  BillRefNumber: "2000",
};
const registerUrl = {
  ShortCode: "601426",
  ResponseType: "Completed",
  ConfirmationURL: "https://localhost:4000/api/confirmation",
  ValidationURL: "https://localhost:4000/api/validation",
};
const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;
const apiUrl =
  "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

async function getAccessToken() {
  const auth = base64.encode(`${consumerKey}:${consumerSecret}`);
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
}

async function simulateC2BTransaction(endpoint) {
  try {
    const accessToken = await getAccessToken();
    const body = endpoint === "registerurl" ? registerUrl : simulate;
    const response = await fetch(
      `https://sandbox.safaricom.co.ke/mpesa/c2b/v1/${endpoint}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error in C2B simulation:", error);
  }
}

simulateC2BTransaction("registerurl");
