"use client";

import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { HiOutlineDocumentReport, HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";

import HistoryModal from "@/components/HistoryModal";
import useHistoryModal from "@/hooks/useHistoryModal";
import useCurrentProject from "@/hooks/useCurrentProject";


const History = () => {
    const [history, setHistory] = useState<any>([]);
    const [selectedRegister, setSelectedRegister] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);

    const { data: session } = useSession();
    const { project } = useCurrentProject();
    const { openHistoryModal } = useHistoryModal();

    if (!session) {
        redirect('/login');
    }

    const getHistory = useCallback(async () => {
        try {
            const response = await axios.get(`/api/registers?projectId=${project?.id}`);
            setHistory(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [project, setHistory]);

    useEffect(() => {
        getHistory();
    }, [history, getHistory]);

    const indexOfLastRow = (currentPage * rowsPerPage)
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = history.slice(indexOfFirstRow, indexOfLastRow);





    return (
        <>
            <HistoryModal
                register={selectedRegister}
            />
            <div className="p-4 flex flex-col justify-center items-center w-full">
                <h2 className="text-2xl font-bold text-primary mb-8">History</h2>
                {(history.length !== 0) ? (
                    <>
                        <div className=" flex flex-col items-center w-full bg-bgsecondary p-12 text-lg font-semibold text-primary">
                            <div className="flex flex-row justify-between items-center w-full mb-8">
                                <div className="flex flex-row justify-between items-center w-full">
                                    <p className="w-1/5 text-left">Date</p>
                                    <p className="w-1/5 text-left">End</p>
                                    <p className="w-1/5  text-left">Working Time</p>
                                    <p className="w-2/5 text-left">Description</p>
                                </div>
                            </div>
                            {currentRows.map((item: any) => (
                                <div key={item.id} className="flex flex-col  w-full space-y-4 mb-6">
                                    <div className="flex flex-row justify-between border-b">
                                        <p className="w-1/5 text-left">{String(item.date).split('T')[0]}</p>
                                        <p className="w-1/5 text-left">{item.endTime}</p>
                                        <p className="w-1/5 text-left">{`${Math.floor(item.workingTime / 60).toString().padStart(2, '0')}:${(item.workingTime % 60).toString().padStart(2, '0')}`}</p>
                                        <div className="flex flex-row w-2/5 items-center">
                                            <p className="text-left whitespace-nowrap overflow-hidden overflow-ellipsis w-full mr-2">
                                                {item.description}
                                            </p>
                                            <HiOutlineDocumentReport size={25}
                                                onClick={() => {
                                                    setSelectedRegister(item)
                                                    openHistoryModal()
                                                }}
                                                className="text-highlight cursor-pointer transition hover:highlighthover hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-12 w-full">
                                <hr className="w-full" />

                                <div className="flex w-full justify-end gap-6 mt-4">
                                    <p className="">Rows per page: </p>
                                    <select
                                        onChange={(e) => {
                                            setRowsPerPage(Number(e.target.value));
                                            setCurrentPage(1);
                                        }}
                                        className="bg-bgsecondary text-primary border-primary border-b px-2">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                    </select>
                                    <p className="text-primary">{indexOfFirstRow + 1} - {indexOfLastRow > history.length ? history.length : indexOfLastRow} of {history.length}</p>
                                    <button
                                        onClick={() => { setCurrentPage(currentPage - 1) }}
                                        disabled={currentPage === 1}
                                    >
                                        <HiChevronLeft
                                            size={25}
                                            className="hover:text-highlight cursor-pointer transition"
                                        />
                                    </button>
                                    <button
                                        onClick={() => { setCurrentPage(currentPage + 1) }}
                                        disabled={currentPage === Math.ceil(history.length / rowsPerPage)}
                                    >
                                        <HiChevronRight
                                            size={25}
                                            className="hover:text-highlight cursor-pointer transition"
                                        />
                                    </button>


                                </div>
                            </div>
                        </div>
                    </>) : (
                    <div className="flex flex-col items-center w-full bg-bgsecondary p-12 text-lg font-semibold text-primary">
                        <p className="text-center">No registers yet</p>
                    </div>
                )
                }
            </div>
        </>
    );
}

export default History;