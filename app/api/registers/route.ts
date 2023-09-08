import prisma from "@/lib/prisma";
import serverAuth from "@/lib/serverAuth";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const { user } = await serverAuth(request);

        if (!user) {
            return new Response("Unauthorized", { status: 401 });
        }

        const projectId = request.nextUrl.searchParams.get("projectId")

        if(!projectId) {
            return new Response("Invalid request", { status: 400 });
        }

        const registers = await prisma.register.findMany({
            where: {
                projectId
            }
        });

        return new Response(JSON.stringify(registers), { status: 200 });

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

        const { projectId, date, startTime, endTime, workingTime, restingTime, description } = await request.json();

        // convert to minutes
        const workingTimeArray = workingTime.split(":");
        const workingTimeMinutes = parseInt(workingTimeArray[0]) * 60 + parseInt(workingTimeArray[1]);
        const restingTimeArray = restingTime.split(":");
        const restingTimeMinutes = parseInt(restingTimeArray[0]) * 60 + parseInt(restingTimeArray[1]);



        if (!projectId || !date || !endTime || !workingTime) {
            return new Response("Invalid request", { status: 400 });
        }

        const register = await prisma.register.create({
            data: {
                projectId,
                date: new Date(date),
                startTime: startTime,
                endTime: endTime,
                workingTime: workingTimeMinutes,
                restingTime: restingTimeMinutes,
                description
            }
        });

        if (!register) {
            return new Response("Internal server error", { status: 500 });
        }

        return new Response(JSON.stringify(register), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response("Internal server error", { status: 500 });
    }
}