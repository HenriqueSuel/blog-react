import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Repo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { username } = useParams();

    console.log(searchParams.get("idade"))

    
    return (
        <h1>
            Pagina Repo - {username}
        </h1>
    )
}

export { Repo }