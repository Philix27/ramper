import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ISlice {
  drawerIsOpen?: boolean;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  drawerIsOpen: false,
};

export const useSettingsStore = create(
  persist<ISliceUpdate>(
    (set) => ({
      ...defaultValues,
      update: (data) =>
        set((state) => {
          return { ...state, ...data };
        }),
      clear: () =>
        set((state) => {
          return { ...state, ...defaultValues };
        }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
