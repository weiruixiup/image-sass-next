import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GitlabProvider from 'next-auth/providers/gitlab';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db/db';

export const authOptions = {
    // TODO TS2345: Argument of type
    // { adapter: Adapter; providers: OAuthConfig<GitLabProfile>[]; }
    // is not assignable to parameter of type AuthOptions
    adapter: DrizzleAdapter(db) as any,
    providers: [
        GitlabProvider({
            clientId:
                'eda2945ff8a0816e42dc3dccf3e72068852fa5712827ae26e03e101021494e6f',
            clientSecret:
                'gloas-5ef296b892180ac358ed3ce9dbc7958491ac516d60874cdd1f8962e71a0e4b99',
        }),
    ],
};

// 创建 NextAuth 处理程序
const authHandler = NextAuth(authOptions);
export async function GET(req: NextRequest, res: NextResponse) {
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
