import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const token = req.headers.get("authorization");

    // console.log("Token:", token);

    const formData = await req.formData();

    const response = await fetch("https://api.timbu.cloud/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `${token}`,
      },

      // body: JSON.stringify(body),
      body: formData,
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
