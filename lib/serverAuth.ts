import { getServerSession } from "next-auth";
import {authOptions} from "@/lib/auth";

import prisma from "@/lib/prisma";

const serverAuth = async (request: Request) => {
    const session = await getServerSession({ req: request, ...authOptions });
    if (!session) {
        throw new Error("Not authenticated");
    }
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email as string,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    return {user};
}

export default serverAuth;