import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/server/db/db';
import GitlabProvider from 'next-auth/providers/gitlab';

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
