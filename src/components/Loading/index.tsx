import React from "react";
import { useLoading } from "../../context/loading.context";


interface IProps {
    name: string;
}

const Loading = ({ name }: IProps) => {
    const { isLoading } = useLoading();

    /* if (name === 'loadingBlue' && isLoading) {
        return (
            <div className="w-full h-full bg-blue-950 opacity-50 fixed top-0 left-0 flex justify-center items-center">
                <div className="rounded-full w-16 h-16 border-t-4 border-l-4 border-blue-500 animate-spin"></div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="w-full h-full bg-gray-950 opacity-50 fixed top-0 left-0 flex justify-center items-center">
                <div className="rounded-full w-16 h-16 border-t-4 border-l-4 border-blue-500 animate-spin"></div>
            </div>
        )
    }
        return null;
    */


    return (
        <>
            {isLoading && (
                <input type={name === 'texto' ? 'text' : 'number'} />
            )}
        </>
    )
}

export { Loading }