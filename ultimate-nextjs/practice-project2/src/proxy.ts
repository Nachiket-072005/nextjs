import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const publicRoutes = [
        "/login",
        "/register",
        "/api/auth",
        "/favicon.ico"
    ]
    if (publicRoutes.some(path => pathname.startsWith(path)
    )) {
        return NextResponse.next();
    }

    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set("callbackUrl", request.url);
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico|node_modules).*)"
}