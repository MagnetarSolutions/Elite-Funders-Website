import { NextResponse } from "next/server";
import { blogs } from "@/public/json/blog";

export async function GET(request) {
  const data = blogs;
  return NextResponse.json(data, { status: 200 });
}
