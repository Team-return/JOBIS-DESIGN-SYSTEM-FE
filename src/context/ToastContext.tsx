import { randomUUID } from 'crypto';
import { ColorType } from '../components/toast/Toast';
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export interface ToastState {
  id: string;
  title?: string;
  type: ColorType;
  message: string;
  time?: number;
}

interface BearState {
  list: ToastState[];
  append: (by: Omit<ToastState, 'id'>) => void;
  delete: (id: string) => void;
}

export const useToastStore = create<BearState>()((set) => ({
  list: [],
  append: (by) =>
    set((state) => ({
      list: state.list.concat({
        id: uuidv4(),
        title: by.title,
        message: by.message,
        type: by.type,
      }),
    })),
  delete: (deleteId) =>
    set((state) => ({
      list: state.list.map(({ id, title, type, message }) => {
        if (deleteId === id) {
          return { id: '', title: '', type: 'GREEN', message: '' };
        } else {
          return { id, title: title, type: type, message: message };
        }
      }),
    })),
}));
