"use client";

import axios from "axios";
import useNewProjectModal from "@/hooks/useNewProjectModal";
import { useState, useCallback, useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BsPencil } from 'react-icons/bs'

import useCurrentProject from "@/hooks/useCurrentProject";

type Project = {
    id: string;
    name: string;
    description?: string;
    userId: string;
}

const NewProjectModal = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [projectName, setProjectName] = useState<string>("");
    const [projectNameEditable, setProjectNameEditable] = useState<boolean>(true);
    const [projectDescription, setProjectDescription] = useState<string>("");
    const [projectDescriptionEditable, setProjectDescriptionEditable] = useState<boolean>(true);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const { isOpen, closeNewProjectModal } = useNewProjectModal();
    const { setCurrentProject } = useCurrentProject();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        try {
            e.preventDefault();
            if (projectName === "") {
                alert("Project Name is required");
                return;
            }
            selectedProject?updateProject():addNewProject();
            closeNewProjectModal();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setProjectName("");
        setProjectDescription("");
        setProjectNameEditable(true);
        setProjectDescriptionEditable(true);
        setSelectedProject(null);
    }, [isOpen])

    const addNewProject = useCallback(async () => {
        try {
            const newProject = await axios.post('/api/projects', {
                name: projectName,
                description: projectDescription
            })

            setProjects([...projects, newProject.data])
            setCurrentProject(newProject.data);

        } catch (error) {
            console.error(error);
        }
    }, [projectName, projectDescription, projects])

    const getProjects = useCallback(async () => {
        try {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
            selectedProject ? setCurrentProject(selectedProject) : null;
        } catch (error) {
            console.error(error);
        }
    }, [projects, selectedProject])

    const updateProject = useCallback(async () => {
        try {
            const response = await axios.put(`/api/projects`, {
                id: selectedProject?.id,
                name: projectName,
                description: projectDescription
            })

            setProjects([...projects.filter((project) => project.id !== selectedProject?.id), response.data])
            setCurrentProject(response.data);

        } catch (error) {
            console.error(error);
        }
    }, [selectedProject, projectName, projectDescription])



    useEffect(() => {
        getProjects();
    }, [projects])

    if (!isOpen) {
        return null;
    }

    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-full mx-auto max-w-4xl rounded-md overflow-hidden">
                <div className='scale-50 md:scale-75 lg:scale-100 transform duration-300 relative flex-auto bg-black drop-shadow-md p-16 w-full'>
                    <AiOutlineClose
                        size={30}
                        className="absolute top-4 right-4 text-2xl text-primary cursor-pointer hover:scale-110 hover:text-highlight transition"
                        onClick={() => {
                            closeNewProjectModal()
                        }}
                    />
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                        className="flex flex-row w-full gap-8">
                        <div className="flex flex-col w-full text-xl gap-8">
                            <div className="flex flex-col items-start gap-2 w-full">
                                <label className="text-primary" htmlFor="project">Select your Project</label>
                                <select
                                    onChange={(e) => {

                                        if (!(e.target.value === "")) {
                                            setProjectNameEditable(false);
                                            setProjectDescriptionEditable(false);
                                            setSelectedProject(projects.find((project) => project.name === e.target.value) || null);
                                            setProjectName(projects.find((project) => project.name === e.target.value)?.name || "");
                                            setProjectDescription(projects.find((project) => project.name === e.target.value)?.description || "");
                                        }
                                        else {
                                            setProjectName("");
                                            setProjectDescription("");
                                            setProjectNameEditable(true);
                                            setProjectDescriptionEditable(true);
                                            setSelectedProject(null);
                                        }
                                    }}
                                    className="w-full rounded p-2" name="project" id="project">
                                    <option value="">New Project...</option>
                                    {projects.map((project, index) => (
                                        <option key={index} value={project.name}>{project.name}</option>
                                    ))}
                                </select>

                            </div>
                            <div className="flex flex-col items-start gap-2 w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                    <label className="text-primary" htmlFor="projectname">
                                        Project Name<span className="text-highlight">*</span>
                                    </label>
                                    <BsPencil size={25} className="text-2xl text-highlight cursor-pointer hover:scale-110 hover:text-highlighthover transition" onClick={() => { setProjectNameEditable(!projectNameEditable) }} />
                                </div>
                                <input
                                    disabled={!projectNameEditable}
                                    value={projectName}
                                    onChange={(e) => { setProjectName(e.target.value) }}
                                    className="w-full rounded p-2" type="text" name="projectname" id="projectname" />
                            </div>
                            <div className="flex flex-col items-start gap-2 w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                    <label className="text-primary" htmlFor="projectname">Project Description</label>
                                    <BsPencil size={25} className="text-2xl text-highlight cursor-pointer hover:scale-110 hover:text-highlighthover transition" onClick={() => { setProjectDescriptionEditable(!projectDescriptionEditable) }} />
                                </div>
                                <textarea
                                    disabled={!projectDescriptionEditable}
                                    value={projectDescription}
                                    onChange={
                                        (e) => { setProjectDescription(e.target.value) }}
                                    className="w-full rounded p-2" rows={4} name="projectdescription" id="projectdescription" />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-highlight text-white font-semibold uppercase rounded-md px-4 py-2 hover:bg-highlighthover hover:text-secondary transition">
                                    {selectedProject ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewProjectModal;