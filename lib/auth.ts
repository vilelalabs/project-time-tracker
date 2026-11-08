import type { NextAuthOptions } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/prisma'
import { privacyRecord } from '@/lib/privacy'

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: false, //process.env.NODE_ENV === "development",

    adapter: PrismaAdapter(prisma),
    events: {
        // first Google sign-in: the account is created by the adapter, under the privacy
        // notice of the login page
        async createUser({ user }) {
            await prisma.user.update({ where: { id: user.id }, data: privacyRecord('signin-notice') })
        },
    },
}