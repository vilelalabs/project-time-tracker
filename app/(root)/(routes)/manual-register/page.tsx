"use client";

import axios from "axios";
import { useState, useCallback } from "react";


import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";

import Input from "@/components/Input";
import useCurrentProject from "@/hooks/useCurrentProject";

const ManualRegisterPage = () => {

    const { data: session } = useSession();
    const { project } = useCurrentProject();

    if (!session) {
        redirect('/login');
    }

    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [workingTime, setWorkingTime] = useState('');
    const [restingTime, setRestingTime] = useState('');
    const [description, setDescription] = useState('');

    const addRegister = useCallback(async () => {
        try {
            const response = await axios.post('/api/registers', {
                projectId: project?.id as string,
                date,
                startTime,
                endTime,
                workingTime,
                restingTime,
                description
            });
        } catch (error) {
            console.error(error);
        }

    }, [project, date, startTime, endTime, workingTime, restingTime, description]);


    const onSubmit = (e: any) => {
        e.preventDefault();
        addRegister();

        setDate('');
        setStartTime('');
        setEndTime('');
        setWorkingTime('');
        setRestingTime('');
        setDescription('');
    }


    return (
        <div className="m-4 flex flex-col justify-center items-center w-full text-secondary ">
            <h2 className="text-2xl font-bold text-primary mb-8">Manual register</h2>
            <div className=" flex flex-col items-center w-2/3 bg-bgsecondary p-12 space-y-12">
                <form
                    onSubmit={(e) => onSubmit(e)}
                    className="flex flex-row flex-wrap mx-4 p-4 gap-8 w-full">
                    <Input
                        label="Date"
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                        label="Start Time"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                    <Input
                        label="End Time"
                        required
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                    <Input
                        label="Working time"
                        required
                        type="time"
                        value={workingTime}
                        onChange={(e) => setWorkingTime(e.target.value)}
                    />
                    <Input
                        label="Resting time"
                        type="time"
                        value={restingTime}
                        onChange={(e) => setRestingTime(e.target.value)}
                    />
                    <Input
                        label="Description"

                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className="flex w-full justify-end">
                        <button
                            type="submit"
                            className="bg-highlight text-white font-semibold uppercase rounded-md px-4 py-2 hover:bg-highlighthover hover:text-secondary transition"
                        >
                            Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ManualRegisterPage;