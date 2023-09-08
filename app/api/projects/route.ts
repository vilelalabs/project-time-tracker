
import prisma from "@/lib/prisma";
import serverAuth from "@/lib/serverAuth";


export async function GET(request: Request) {   
    try {
        const { user } = await serverAuth(request);

        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }

        const projects = await prisma.project.findMany({
            where: {
                userId: user.id
            }
        });

        return new Response(JSON.stringify(projects), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 });
    }

}

export async function POST(request: Request) {
    try {
        const { user } = await serverAuth(request);

        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }

        const { name, description } = await request.json();
    
        const project = await prisma.project.create({
            data: {
                name,
                description,
                userId: user.id
            }
        });

        return new Response(JSON.stringify(project), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { user } = await serverAuth(request);

        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }

        const { id, name, description } = await request.json();

        const project = await prisma.project.update({
            where: {
                id
            },
            data: {
                name,
                description
            }
        });

        return new Response(JSON.stringify(project), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 });
    }
}