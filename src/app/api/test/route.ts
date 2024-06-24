import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/server/auth';
import { z } from 'zod';

// 创建 NextAuth 处理程序
const authHandler = NextAuth(authOptions);

const inputSchema = z.object({
    email: z.string().email(),
    name: z.string().max(10).min(3),
});
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const query = req.nextUrl.searchParams;
        const name = query.get('name');
        const email = query.get('email');
        // const result = await authHandler(req, res);
        // 处理成功后返回结果
        return NextResponse.json(inputSchema.safeParse({
            name,
            email,
        }));
    } catch (error) {
        console.error(error);
        // 处理错误情况
        // @ts-ignore
        return res.status(500).end('Internal Server Error');
    }
}

// 处理 POST 请求
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const result = await authHandler(req, res);
        // 处理成功后返回结果
        return result;
    } catch (error) {
        console.error(error);
        // 处理错误情况
        // @ts-ignore
        return res.status(500).end('Internal Server Error');
    }
}
