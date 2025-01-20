import { create } from "zustand";

interface ModalState {
  openModalId: string | undefined;
  setOpenModalId: (id: string | undefined) => void;
}

const useModalStore = create<ModalState>((set) => ({
  openModalId: undefined,
  setOpenModalId: (id) =>
    set((state) => ({
      openModalId: state.openModalId === id ? undefined : id,
    })),
}));

export default useModalStore;
