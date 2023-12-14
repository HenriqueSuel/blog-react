import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { List } from '../../components/List';
import { useGithub } from '../../context/github.context';
import { getApi } from '../../services/api.services';
import { v4 as uuidv4 } from 'uuid';
import { collection, getFirestore, addDoc, getDocs } from 'firebase/firestore'
interface IListText {
    id: string;
    title: string;
}

const Home = () => {
    const [username, setUsername] = useState<string>('');
    const { listUser, handleGetUser } = useGithub();

    const [listText, setListText] = useState<IListText[]>([]);


    const getLista = async () => {
      /*   const resp = await getApi<IListText[]>('https://jsonplaceholder.typicode.com/posts');

        for (let index = 0; index < 100; index++) {
            const newList = resp.data.map(item => {

                return {
                    ...item,
                    id: uuidv4()
                }
            })
            setListText((previous) => [...previous, ...newList]);
        } */

    }


    useEffect(() => {


       /*  const db = getFirestore();

        const itemsCollection = collection(db, 'items');

        getDocs(itemsCollection).then((snapshot) => {
            console.log(snapshot)
        }) */
        const order = {
            buyer: { name: 'augutin', phone: '111', email: 'a@a.com' },
            items: [{ name: "Bici", price: 100 }],
            total: 100,
        }

        const db = getFirestore();

        const orderCollection = collection(db, "orders")
        
        addDoc(orderCollection, order).then((item) => console.log(item))
        getLista();
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <div className='flex mt-5'>
                    <Input setValue={setUsername} />
                    <Button title='Buscar' handleClick={() => handleGetUser(username)} />
                </div>
                {listText.map((item, index) => (
                    // <React.Fragment key={item.id}>
                    <List key={item.id} username={item.title} fullName={item.title} url='' />
                    // </React.Fragment>
                ))}


            </div>
        </>
    );
}

export { Home };
