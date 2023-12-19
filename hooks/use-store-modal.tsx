import { create } from "zustand";

interface useStoreModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<useStoreModalProps>(set => ({
  //return an object with default values, set - is a function that allows to change the state
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
