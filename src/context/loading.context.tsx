import { createContext, useContext, useState } from "react";


interface ILoading {
    isLoading: boolean;
    setIsLoading: (status: boolean) => void;
}

const loadingContextDefault = {
    isLoading: false,
    setIsLoading: () => null,
}

const LoadingContext = createContext<ILoading>(loadingContextDefault);

interface IProvider {
    children: React.ReactNode
}

const LoadingProvider = ({ children }: IProvider) => {
    const [teste, setTeste] = useState<boolean>(true);
    return (
        <LoadingContext.Provider
            value={{
                isLoading: teste,
                setIsLoading: setTeste
            }}
        >
            {children}
        </LoadingContext.Provider>
    )
}

const useLoading = () => useContext(LoadingContext);

export { useLoading, LoadingProvider }
