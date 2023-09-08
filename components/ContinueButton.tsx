"use client";

import useNewProjectModal from "@/hooks/useNewProjectModal";


const ContinueButton = () => {

    const { openNewProjectModal } = useNewProjectModal();

    return ( 
        <button
            onClick={openNewProjectModal}
            className="bg-highlight text-white font-semibold uppercase rounded-md px-4 py-2 hover:bg-highlighthover hover:text-secondary transition">Continue
        </button>
     );
}
 
export default ContinueButton;