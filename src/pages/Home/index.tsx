import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { List } from '../../components/List';
import { useGithub } from '../../context/github.context';

const Home = () => {
    const [username, setUsername] = useState<string>('');
    const { listUser, handleGetUser } = useGithub();


    return (
        <>
            <div className="container mx-auto">
                <div className='flex mt-5'>
                    <Input setValue={setUsername} />
                    <Button title='Buscar' handleClick={() => handleGetUser(username)} />
                </div>
                {listUser.map((item, index) => (
                    // <React.Fragment key={item.id}>
                    <List key={item.id} username={item.login} fullName={item.name} url={item.avatar_url} />
                    // </React.Fragment>
                ))}


            </div>
        </>
    );
}

export { Home };
