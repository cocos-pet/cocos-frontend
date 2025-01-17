import { create } from "zustand";

interface ModalState {
  openModalId: number | null;
  setOpenModalId: (id: number | null) => void;
}

const useModalStore = create<ModalState>((set) => ({
  openModalId: null,
  setOpenModalId: (id) =>
    set((state) => ({
      openModalId: state.openModalId === id ? null : id, // 동일 ID면 닫기, 아니면 열기
    })),
}));

export default useModalStore;
