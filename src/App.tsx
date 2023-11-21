import React, { useEffect, useState } from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { NavBar } from './components/Navbar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Loading } from './components/Loading';


interface IProducts {
  id: string;
  name: string;
  description: string;
  stock: number;
}

function App() {

  const [repoName, setRepoName] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listRepo, setListRepo] = useState<string[]>();


  const getListRepo = (): Promise<IProducts[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            description: 'asdadsa',
            id: '1',
            name: 'adasdas',
            stock: 2
          },
          {
            description: 'asdadsa',
            id: '2',
            name: 'adasdas',
            stock: 3
          },
          {
            description: 'asdadsa',
            id: '3',
            name: 'adasdas',
            stock: 20
          },
        ])
        // reject({
        //   message: 'Ops tivemos um erro! '
        // });
      }, 5000)
      /*  */
    })
  }

  useEffect(() => {
    setIsLoading(true);
    getListRepo().then(resp => {
      console.log('then', resp);
    }).catch((erro) => {
      console.log('Deu ruim', erro.message);
    }).finally(() => {
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const resp = await getListRepo();

        console.log('async await', resp);
      } catch (error) {
        console.log('Deu ruim', error);
      } finally {
        setIsLoading(false);
      }
    }
    onMount();
  }, [])


  return (
    <React.Fragment>
      <Loading loading={isLoading} nameScreen='home' />
      <NavBar />
      <Hero />
      <Input setValue={setRepoName} />
    </React.Fragment>
  );
}

export default App;
