'use client';
import { Button } from '@/components/Button';
import { SessionProvider } from '@/components/UserInfo';
import { useEffect } from 'react';
import { tRPCClient } from '@/utils/api';

const Home = () => {
    useEffect(() => {
        tRPCClient.hello.query().then((r) => {
            console.log(r);
        });
    }, []);

    return (
        <SessionProvider>
            <Button>Shadcn ui Button</Button>
        </SessionProvider>
    );
};

export default Home;
