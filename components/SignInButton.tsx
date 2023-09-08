"use client"

import { signIn } from 'next-auth/react';
import { BsGoogle } from 'react-icons/bs';

const SignInButton = () => {
    return (
        <button
            className="bg-highlight text-primary font-semibold py-2 px-4 rounded-md  hover:bg-highlighthover transition hover:text-secondary"
            onClick={() => signIn('google',{callbackUrl:'/'})}
        >
            <BsGoogle size={25} className="inline-block mr-2" />
            Sign in with Google
        </button>
    );
}

export default SignInButton