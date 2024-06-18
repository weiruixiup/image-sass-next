import { Button } from '@/components/Button';
import { db } from '@/server/db/db';
import { Users } from '@/server/db/schema';

const Home = async () => {
    const users = await db.select().from(Users);
    return (
        <>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
            <Button>Shadcn ui Button</Button>
        </>
    );
};

export default Home;
