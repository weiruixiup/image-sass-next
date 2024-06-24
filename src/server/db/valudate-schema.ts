import { createInsertSchema } from 'drizzle-zod';
import { users } from '@/server/db/schema';

export const createUserSchema = createInsertSchema(users, {
    // 如果不对email单独处理，那么任意string都可以通过，因为数据库是没有校验的
    email: (schema) => schema.email.email(),
});

// 更新时，只是需要判断一些字段
export const updateUserSchema = createUserSchema.pick({ email: true });
