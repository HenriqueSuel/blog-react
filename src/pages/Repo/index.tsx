import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../services/api.services";
import { IRepo } from "../../interface/repo.interface";

const Repo = () => {
    const [listRepo, setListRepo] = useState<IRepo[]>([])
    const { username } = useParams();


    useEffect(() => {
        const onMount = async () => {
            const resp = await getApi(`https://api.github.com/users/${username}/repos`)
            setListRepo(resp.data);
        }
        onMount();
    }, [])


    return (
        <div className="container mx-auto">
            {listRepo.map(repo => (
                <div className="flex items-center border-4 p-5 mt-5" >
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">
                            {repo.name.slice(0, 2)}
                        </span>
                    </div>
                    <h1 className="ml-5 text-2xl">
                        {repo.name}
                    </h1>
                </div>

            ))}
        </div>
    )
}

export { Repo }