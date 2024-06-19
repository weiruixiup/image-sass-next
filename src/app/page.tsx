import { Button } from '@/components/Button';
import { SessionProvider, UserInfo } from '@/components/UserInfo';

const Home = () => {
    return (
        <>
            <Button>Shadcn ui Button</Button>
            <SessionProvider>
                <UserInfo />
            </SessionProvider>
        </>
    );
};

export default Home;
