import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// for query purposes
// 协议 (postgres://)
// 用户名 (postgres)
// 密码 (1)
// 主机地址 (0.0.0.0)
// 端口号 (5433)
// 数据库名称 (db)
const queryClient = postgres('postgres://postgres:1@0.0.0.0:5433/image-sass');
export const db = drizzle(queryClient, { schema });
