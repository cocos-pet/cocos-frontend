import { Dispatch, SetStateAction } from "react";
import { create } from "zustand";
import { MemberInfo } from "../_hooks/useMypageState";

interface myPageMemberInfoStore {
  member: MemberInfo | undefined;
  setMemberInfo: (member: MemberInfo) => void;
}

export const useMypageMemberInfo = create<myPageMemberInfoStore>((set) => ({
  member: undefined,
  setMemberInfo: (member) => set({ member }),
}));
