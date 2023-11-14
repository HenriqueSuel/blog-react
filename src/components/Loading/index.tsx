import React from "react";

interface Props {
    loading: boolean;
    nameScreen: string;
}


const Loading: React.FC<Props> = ({ loading, nameScreen }) => {

    console.log(loading, nameScreen);


    return (
        <>
            {loading && (
                <div className="w-full h-full bg-gray-950 opacity-50 fixed top-0 left-0 flex justify-center items-center">
                    <div className="rounded-full w-16 h-16 border-t-4 border-l-4 border-blue-500 animate-spin"></div>
                </div>
            )}
        </>
    )
}

export { Loading }