
import {isEmpty} from "lodash";
import React from "react";


interface InputProps {
    label: string;
    required?: boolean;
    type: string;
    value?: any;
    onChange?: (e: any) => void;
}

const Input = ({ label, required, type, value, onChange }: InputProps) => {
    return (
        <div className="relative flex flex-col group w-full">
            <input
                name={label}
                className={`${!isEmpty(value)?'text-primary':'text-transparent'} peer w-full bg-transparent appearance-none px-3 py-2 border-b  focus:outline-none focus:border-highlight focus:text-primary z-10`}
                value={value}
                type={type}
                required={required}
                onChange={onChange}
                placeholder=" "
            />
            <label
                className={`${!isEmpty(value)?'-translate-y-6 text-sm':''} w-full absolute top-4  text-lg text-primary peer-focus:text-highlight transform duration-150 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-focus:text-sm`}
                htmlFor={label}
            >
                {label}{required?<span className="text-highlight">*</span>:null}
            </label>
            
        </div >
    );
}

export default Input;