import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Loading } from '../../components/Loading';
import { List } from '../../components/List';
import { IRepo } from '../../interface/respo.interface';
import { postApi } from '../../services/api.services';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [repoName, setRepoName] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listRepo, setListRepo] = useState<IRepo[]>([]);


    const getListRepo = (): Promise<AxiosResponse<IRepo[]>> => {

        const user = {
            email: 'henrique.suel@hotmail.com',
            password: 'henriquesuel123'
        }

        return postApi('https://api.github.com/users/henriquesuel', user)

    }

    useEffect(() => {
        setIsLoading(true);
        const onMount = async () => {
            try {
                const resp = await getListRepo();
                /*    const resposta = await resp.json(); */
                console.log(resp);
                /*  setListRepo(resp); */
            } catch (error) {
                console.log('Deu ruim', error);
            } finally {
                setIsLoading(false);
            }
        }
        onMount();
    }, [])

    const handleClick = () => {
        setListRepo((previous) => [...previous, {
            full_name: repoName,
            id: previous[previous.length - 1].id + 1,
            owner: {
                avatar_url: 'https://avatars.githubusercontent.com/u/22986830?v=4'
            }
        }])


    }


    return (
        <>
            <Loading loading={isLoading} nameScreen='home' />
            <div className="container mx-auto">
                <div className='flex mt-5'>
                    <Input setValue={setRepoName} />
                    <Button title='Buscar' handleClick={handleClick} />
                </div>
                {listRepo.map((item, index) => (
                    // <React.Fragment key={item.id}>
                    <List key={item.id} fullName={item.full_name} id={item.id} url={item.owner.avatar_url} />
                    // </React.Fragment>
                ))}


            </div>
        </>
    );
}

export { Home };
