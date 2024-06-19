'use client';

import {
    useSession,
    SessionProvider as NextSessionProvider,
} from 'next-auth/react';

export const UserInfo = () => {
    const { data: session, status } = useSession();
    console.log(session);
    return <div>{status}</div>;
};

export const SessionProvider = (props: any) => {
    return (
        <NextSessionProvider {...props}>{props.children}</NextSessionProvider>
    );
};
