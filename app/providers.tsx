"use client";

import { SessionProvider } from "next-auth/react";
import PrivacyGate from "@/components/PrivacyGate";

type Props = {
    children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
    return (
        <SessionProvider>
            {children}
            <PrivacyGate />
        </SessionProvider>
    );
};