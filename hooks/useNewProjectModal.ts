import {create} from 'zustand';

export interface NewProjectModalInterface {
    isOpen: boolean;
    openNewProjectModal: () => void;
    closeNewProjectModal: () => void;
}

const useNewProjectModal = create<NewProjectModalInterface>((set) => ({
    isOpen: false,
    openNewProjectModal: () => set({isOpen: true}),
    closeNewProjectModal: () => set({isOpen: false}),
}));

export default useNewProjectModal;