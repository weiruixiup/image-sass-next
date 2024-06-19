import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/auth';
import React from 'react';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const serverSession = await getServerSession(authOptions);

    if (!serverSession?.user?.email) {
        redirect('api/auth/signin');
    }

    return <>{children}</>;
};

export default Layout;
