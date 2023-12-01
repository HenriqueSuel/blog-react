import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Loading } from '../../components/Loading';
import { List } from '../../components/List';
import { getApi, postApi } from '../../services/api.services';
import { IUser } from '../../interface/user.interface';

const Home = () => {
    const [username, setUsername] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listUser, setListUser] = useState<IUser[]>([])

    const handleClick = async () => {
        setIsLoading(true);
        const resp = await getApi(`https://api.github.com/users/${username}`)
        // setListUser([...listUser, resp.data])
        setListUser((previous) => [...previous, resp.data])
    
        localStorage.setItem('user', JSON.stringify([...listUser, resp.data]));
        setIsLoading(false);
    }


    useEffect(() => {
        const usersJSON = localStorage.getItem('user');
        const users = usersJSON ? JSON.parse(usersJSON) : null;
        if (users) {
            setListUser(users);
        }
    }, [])

    return (
        <>
            <Loading loading={isLoading} nameScreen='home' />
            <div className="container mx-auto">
                <div className='flex mt-5'>
                    <Input setValue={setUsername} />
                    <Button title='Buscar' handleClick={handleClick} />
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
