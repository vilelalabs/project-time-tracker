
import React from "react";



interface RegisterProps {
    label: string;
    value?: any;
    icon: any;
}

const Register = ({ label, value, icon }: RegisterProps) => {

    const Icon = icon;
    return (
        <div className="flex flex-col group w-full">
            <div className="flex flex-row items-center">
                <Icon size={25} className="text-highlight mr-2" />
                <p  className='w-full text-xl text-primary'
                >{label} </p>
            </div>
            <p
                className='text-primary text-xl peer w-full bg-transparent appearance-none px-3 py-2 border-b  focus:outline-none hover:text-highlight focus:text-primary transition'
            >
                {value}
            </p>

        </div >
    );
}

export default Register;