import styled from 'styled-components';
import { toastStateContext, useToastStore } from '../../context/ToastContext';
import { ColorType, Toast, ToastProps } from './Toast';

export const ToastContainer = () => {
  const toastState = useToastStore((state) => state.list);

  return (
    <_Container>
      {toastState.map((list) => {
        const { title, id, type, message } = list;
        return <Toast id={id} type={type} title={title} message={message} />;
      })}
    </_Container>
  );
};

const _Container = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  gap: 20px;
`;
