'use client';

import Register from "@/components/Register";
import useHistoryModal from "@/hooks/useHistoryModal";
import { AiOutlineClose, AiOutlineCalendar, AiOutlineClockCircle, AiOutlineFile } from "react-icons/ai";


interface HistoryModalProps {
    register: any;
}

const HistoryModal = ({ register }: HistoryModalProps) => {

    const { isOpen, closeHistoryModal } = useHistoryModal();

    if (!isOpen) {
        return null;
    }

    const { date, startTime, endTime, workingTime, restingTime, description } = register;

    const dateFormatted = String(date).split('T')[0];
    
    const workingTimeFormatted = `${Math.floor(workingTime / 60).toString().padStart(2, '0')}:${(workingTime % 60).toString().padStart(2, '0')}`;
    const restingTimeFormatted = `${Math.floor(restingTime / 60).toString().padStart(2, '0')}:${(restingTime % 60).toString().padStart(2, '0')}`;



    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-full mx-auto max-w-2xl rounded-md overflow-hidden">
                <div className='scale-50 md:scale-75 lg:scale-100 transform duration-300 relative flex-auto bg-black drop-shadow-md p-16 w-full'>
                    <AiOutlineClose
                        size={30}
                        className="absolute top-4 right-4 text-2xl text-primary cursor-pointer hover:scale-110 hover:text-highlight transition"
                        onClick={closeHistoryModal}
                    />
                    <h2 className="text-2xl text-center font-bold text-primary mb-8">Details</h2>

                    <div className="flex flex-row flex-wrap mx-4 p-4 gap-8 w-full">
                        <Register
                            label="Date"
                            value={dateFormatted}
                            icon={AiOutlineCalendar}
                        />
                        <Register
                            label="Start Time"
                            value={startTime}
                            icon={AiOutlineClockCircle}
                        />
                        <Register
                            label="End Time"
                            value={endTime}
                            icon={AiOutlineClockCircle}
                        />
                        <Register
                            label="Working time"
                            value={workingTimeFormatted}
                            icon={AiOutlineClockCircle}
                        />
                        <Register
                            label="Resting time"
                            value={restingTimeFormatted}
                            icon={AiOutlineClockCircle}
                        />
                        <Register
                            label="Description"
                            value={description}
                            icon={AiOutlineFile}
                        />

                    </div>
                </div>
            </div>
        </div>

    );
}

export default HistoryModal;