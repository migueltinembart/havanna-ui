import { create } from 'zustand';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';

interface dashboardItemOption {
  id: string;
  amount: number;
  title: string;
  URL?: string;
  close?: () => void;
}
interface DashboardStore {
  quantity: number;
  title: string;
  items: dashboardItemOption[];
  setQuantity: (value: number) => void;
  setTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addItem: () => void;
  removeItem: (id: string) => void;
}

const useStore = create<DashboardStore>((set) => ({
  quantity: 0,
  title: '',
  items: [] as dashboardItemOption[],
  setQuantity(value: number) {
    set((state) =>
      produce(state, (draft) => {
        draft.quantity = value;
      })
    );
  },
  setTitle(e) {
    set((state) =>
      produce(state, (draft) => {
        draft.title = e.currentTarget.value;
      })
    );
  },
  addItem() {
    set((state) =>
      produce(state, (draft) => {
        draft.items.push({
          id: uuidv4(),
          amount: draft.quantity,
          title: draft.title,
        });
      })
    );
  },
  removeItem(id: string) {
    set((state) =>
      produce(state, (draft) => {
        console.log(id);
        draft.items = draft.items.filter((item) => id !== item.id);
      })
    );
  },
}));

export { type DashboardStore };
export default useStore;
