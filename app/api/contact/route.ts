import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Forward the request to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        ...body,
      }),
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 })
  }
}
