const response = await axios.post(
  "https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest",
  {
    InitiatorName: "TestInitiator",
    SecurityCredential: "EncryptedInitiatorPassword",
    CommandID: "BusinessPayment",
    Amount: "1000",
    PartyA: "600000",
    PartyB: "254708374149",
    Remarks: "Salary Payment",
    QueueTimeOutURL: "https://yourdomain.com/timeout",
    ResultURL: "https://yourdomain.com/result",
    Occasion: "TestPayment",
  },
  { headers: { Authorization: `Bearer ${accessToken}` } }
);
