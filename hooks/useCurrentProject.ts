import { create } from 'zustand';


interface ProjectInterface{
    id: string;
    name: string;
    description?: string;
    userId: string;
}

interface CurrentProjectInterface {
    project : ProjectInterface | null;
    setCurrentProject: (project: ProjectInterface) => void;
}

const useCurrentProject = create<CurrentProjectInterface>((set) => ({
    project: null,
    setCurrentProject: (project) => set({ project }),

}));

export default useCurrentProject;