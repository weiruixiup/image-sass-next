import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { TestRouter } from '@/utils/trpc';

export const tRPCClient = createTRPCProxyClient<TestRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/api/trpc',
        }),
    ],
});
