import { ChangeEvent, useEffect, useState } from "react"

interface Props {
    setValue: (value: string) => void;
}

const Input = ({ setValue }: Props) => {


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleMask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const regexNumber = /\d/gm
        if (regexNumber.test(event.key) || event.key === 'Backspace') {
            console.log('é um numero')
        } else {
            event.preventDefault();
            console.log('não é um numero', event.key)
        }
    }

    return (
        <input className="px-2 py-1 border-2 border-blue-300 w-full" type="text" onChange={handleChange} />
    )
}

export { Input }