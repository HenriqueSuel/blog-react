import { ChangeEvent, useEffect, useState } from "react"

interface Props {
    setValue: (value: string) => void;
}

const Input = ({ setValue }: Props) => {


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // 000.000.000-00

        const value = event.target.value.replace(/\D/gm, '')

        debugger;
        
        if (value.length > 3 && value.length <= 6) {
            event.target.value = `${value.slice(0, 3)}.${value.slice(3)}`
        } else if (value.length > 6 && value.length < 10) {
            event.target.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`
        } else if (value.length > 9) {
            event.target.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`
        }


        /* const cpfWithMask = event.target.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');


    event.target.value = cpfWithMask */
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