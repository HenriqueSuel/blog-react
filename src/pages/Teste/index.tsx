import { useCallback, useEffect, useMemo, useState } from "react"

const Teste = () => {

    const [count, setCount] = useState<number>(0)


    const handleClickSum = useCallback(() => {
        setCount(count + 1);
    }, [count])

    const handleClick = () => {
        setCount(count - 1);
    }

    const handleComponent = useMemo(() => {
        return (
            <h1>{count}</h1>
        )
    }, [count])


    return (
        <>
            <div className="mb-7">
                <button className="ml-6 bg-blue-700 px-4 py-2 text-white rounded-lg hover:opacity-90" onClick={() => handleClickSum()}>+</button >
            </div>
            <button className="ml-6 bg-blue-700 px-4 py-2 text-white rounded-lg hover:opacity-90" onClick={() => handleClick()}>-</button>

            {handleComponent}

        </>
    )

}

export { Teste }