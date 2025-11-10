import { create } from "zustand";

interface LayoutStore {
  showContent: boolean;
  setShowContent: (value: boolean) => void;
}

const useLayoutStore = create<LayoutStore>()((set) => ({
  showContent: true,
  setShowContent: (value: boolean) => set({ showContent: value }),
}));

export default useLayoutStore;

export const useShowContent = () =>
  useLayoutStore((state) => state.showContent);
