import { useRef } from 'react';

export const useDialog = () => {
  const ref = useRef();
  const showDialog = () => {
    ref.current.showModal();
  };
  const closeDialog = () => {
    ref.current.close();
  };
  return { ref, showDialog, closeDialog };
};
