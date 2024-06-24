import { initTRPC, TRPCError } from '@trpc/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/auth';

export const createTRPCContext = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        throw new TRPCError({
            code: 'FORBIDDEN',
        });
    }
    return session;
};

const t = initTRPC.context<typeof createTRPCContext>().create();

const { router, procedure } = t;
const middleware = t.middleware(async ({ ctx, next }) => {
    const start = Date.now();
    const result = await next();

    console.log('Api operation time: ', Date.now() - start);

    return result;
});

const loggerProcedure = procedure.use(middleware);

export const testRouter = router({
    hello: loggerProcedure.query(async ({ ctx }) => {
        console.log('------------>', ctx.user);
        return {
            helle: 'up',
        };
    }),
});

export type TestRouter = typeof testRouter;
