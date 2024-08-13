// const req = async () => {
//   const res = await fetch(
//     "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
//     {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA==",
//       },
//     }
//   );
//   console.log(res);
// };

// req();

import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.log(err, process.env);
    return;
  }
  return;
});

connection.query(
  `SELECT * FROM m_pesa_transactions`,
  (err, results, fields) => {
    if (err) {
      console.log("Error Executing Query", err.stack);
      return;
    }
    console.log("Results:", results);
    console.log("Fields:", fields);
    return;
  }
);
