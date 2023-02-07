import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Toast, ToastProps } from './Toast';

export const ToastContainer = ({}) => {
  const [list, setList] = useState<ToastProps[]>([
    { title: '제목', message: '메세지', type: 'GREEN' },
  ]);
  let toastProperties = null;

  const AddToast = ({ title, message, type }: ToastProps) => {
    setList([...list, { id: list.length + 1, title, message, type }]);
    console.log(list);
  };

  useEffect(() => {
    setTimeout(() => {
      AddToast({ title: '제목', message: '메세지', type: 'BLUE' });
    }, 3000);
    AddToast({ title: '오류', message: 'Message', type: 'RED' });
  }, []);

  return (
    <_Container>
      {list.map((list) => {
        const { title, message, type } = list;
        return <Toast type={type} title={title} message={message}></Toast>;
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
