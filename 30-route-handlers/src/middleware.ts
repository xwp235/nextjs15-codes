import {NextResponse} from "next/server";
import type {NextRequest, NextFetchEvent} from "next/server";

export function middleware(req: NextRequest, e: NextFetchEvent) {
    const response = NextResponse.next()
    const theme = req.cookies.get("theme")
    if (!theme) {
        response.cookies.set('theme', 'dark')
    }
    // 1：记录访问日志但不影响响应速度
    // 2. 预加载数据或更新缓存
    // 3. 上报错误信息或监控
    // e.waitUntil()
    // if (req.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/hello", req.nextUrl))
    // }
    return response
}

// export const config = {
//     matcher: "profile"
// }
