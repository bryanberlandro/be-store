import React from "react";

interface InputProps{
    label: string;
    inputType?: string;
    placeholder?: string;
    id: string;
}

const Input: React.FC<InputProps> = ({label, inputType, placeholder, id}) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-neutral-500 text-sm">
                {label}
            </label>
            <input 
            type={inputType || 'text'}
            id={id}
            name={id}
            placeholder={placeholder || 'This field cannot be blank'}
            className="border-2 bg-neutral-50 px-4 py-2 rounded-lg focus:outline-blue-500"
            />
        </div>
    )
}

export default Input;