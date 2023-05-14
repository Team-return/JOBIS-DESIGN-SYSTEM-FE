import { ColorType } from '../components/toast/Toast';
import { create } from 'zustand';

export interface ToastState {
  id?: number;
  title?: string;
  type: ColorType;
  message: string;
  time?: number;
}

interface BearState {
  list: ToastState[];
  append: (by: ToastState) => void;
  delete: (by: ToastState) => void;
}

export const useToastStore = create<BearState>()((set) => ({
  list: [],
  append: (by) =>
    set((state) => ({
      list: state.list.concat({
        id: state.list.length + 1,
        title: by.title,
        message: by.message,
        type: by.type,
      }),
    })),
  delete: (by) =>
    set((state) => ({
      list: state.list.filter((res) => res.id !== by.id),
    })),
}));

// interface ToastList {
//   lists: ToastState[];
// }

// type ToastAction = {
//   actionType: 'APPEND_TOAST' | 'DELETE_TOAST';
//   id?: number;
//   toastType: ColorType;
//   message: string;
//   title?: string;
//   time?: number;
// };

// const toastDefaultValue: ToastList = {
//   lists: [],
// };

// export const toastStateContext = createContext(toastDefaultValue);

// type ToastDispatch = Dispatch<ToastAction>;

// export const toastDispatchContext = createContext<ToastDispatch>(() => null);

// const toastReducer = (state: ToastList, action: ToastAction): ToastList => {
//   switch (action.actionType) {
//     case 'APPEND_TOAST':
//       return {
//         lists: state.lists.concat({
//           id: state.lists.length + 1,
//           title: action.title,
//           message: action.message,
//           type: action.toastType,
//         }),
//       };
//     case 'DELETE_TOAST':
//       return {
//         lists: state.lists.filter((res) => res.id !== action.id),
//       };
//     default:
//       return state;
//   }
// };

// export const ToastProvider: FunctionComponent<{
//   children: ReactNode;
// }> = ({ children }) => {
//   const [toast, toastDispatch] = useReducer(toastReducer, toastDefaultValue);
//   return (
//     <toastStateContext.Provider value={toast}>
//       <toastDispatchContext.Provider value={toastDispatch}>
//         {children}
//       </toastDispatchContext.Provider>
//     </toastStateContext.Provider>
//   );
// };
