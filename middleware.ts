import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const role = request.cookies.get("role")?.value ?? "viewer";

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/studio") && role === "viewer") {
    return NextResponse.redirect(new URL("/preview/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
