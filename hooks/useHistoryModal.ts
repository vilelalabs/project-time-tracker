import {create} from 'zustand';

export interface HistoryModalInterface {
    isOpen: boolean;
    openHistoryModal: () => void;
    closeHistoryModal: () => void;
}

const useHistoryModal = create<HistoryModalInterface>((set) => ({
    isOpen: false,
    openHistoryModal: () => set({isOpen: true}),
    closeHistoryModal: () => set({isOpen: false}),
}));

export default useHistoryModal;