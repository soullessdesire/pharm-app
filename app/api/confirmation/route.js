import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // const data = await request.json();

    // console.log("Confirmation data:", data);

    return NextResponse.json(
      { message: "Confirmation received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in confirmation:", error);
    return NextResponse.json(
      { message: "Error in confirming" },
      { status: 400 }
    );
  }
}
export async function GET(request) {
  try {
    console.log(request);
    return NextResponse.json({ message: "GET" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error in confirming" },
      { status: 400 }
    );
  }
}
