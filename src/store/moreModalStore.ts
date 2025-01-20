import { create } from "zustand";

interface ModalState {
  openModalId: number | undefined;
  setOpenModalId: (id: number) => void;
}

const useModalStore = create<ModalState>((set) => ({
  openModalId: undefined,
  setOpenModalId: (id) =>
    set((state) => ({
      openModalId: state.openModalId === Number(id) ? undefined : Number(id),
    })),
}));

export default useModalStore;
