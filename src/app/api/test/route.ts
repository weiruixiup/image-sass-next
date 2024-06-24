import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/server/auth';
import { createUserSchema } from '@/server/db/valudate-schema';

// 创建 NextAuth 处理程序
const authHandler = NextAuth(authOptions);

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const query = req.nextUrl.searchParams;
        const name = query.get('name');
        const email = query.get('email');
        const id = query.get('id');
        // 处理成功后返回结果
        const result = createUserSchema.safeParse({
            name,
            email,
            id,
        });
        if (result.success) {
            return NextResponse.json(result.data);
        } else {
            return NextResponse.json({ error: result.error.message });
        }
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
