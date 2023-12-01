import { Link } from "react-router-dom";

interface Props {
    fullName: string;
    url: string;
    username: string;
}

const List = ({ fullName, url, username }: Props) => {

    return (
        <Link to={`/repo/${username}`} >
            <div className="flex items-center border-4 p-5 mt-5" >
                <img src={url} alt="foto da pessoa" className="rounded-full w-32" />
                <h1 className="ml-5 text-2xl">
                    {fullName}
                </h1>
            </div>
        </Link>

    )
}

export { List }