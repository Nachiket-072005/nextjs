import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ username: "ultimate-nextjs", level: 5 });
}

export async function POST(request: NextRequest) {
    const { name, age } = await request.json();
    return NextResponse.json({ name, age });
}