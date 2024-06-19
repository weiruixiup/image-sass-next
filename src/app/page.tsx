import { Button } from '@/components/Button';
import { SessionProvider } from '@/components/UserInfo';

const Home = () => {
    return (
        <SessionProvider>
            <Button>Shadcn ui Button</Button>
        </SessionProvider>
    );
};

export default Home;
