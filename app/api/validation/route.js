import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // const { transactionId } = await request.json();

    // // Replace with the actual URL and request headers for your payment provider's API
    // const apiUrl = `https://api.safaricom.co.ke/mpesa/b2c/v1/transactionstatus`;
    // const headers = {
    //   Authorization: `Bearer ${process.env.MPESA_ACCESS_TOKEN}`,
    //   "Content-Type": "application/json",
    // };

    // const response = await fetch(apiUrl, {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify({
    //     Initiator: process.env.INITIATOR_NAME,
    //     SecurityCredential: process.env.ENCRYPTED_SECURITY_CREDENTIAL,
    //     CommandID: "TransactionStatusQuery",
    //     TransactionID: transactionId,
    //     PartyA: process.env.SHORTCODE,
    //     IdentifierType: "4",
    //     ResultURL: "https://yourdomain.com/api/c2b/confirmation",
    //     QueueTimeOutURL: "https://yourdomain.com/api/c2b/confirmation",
    //   }),
    // });

    // const result = await response.json();
    // console.log("Validation result:", result);

    // // Respond with the result from the payment provider
    console.log(request);
    let result = "fuckyou";
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error in validation:", error);
    return NextResponse.json(
      { message: "Error in validation" },
      { status: 400 }
    );
  }
}
