import { useState } from 'react';

export const useToast = () => {
  const [isShowToast, setIsShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState('');

  const showToast = (title) => {
    setToastTitle(title || 'Please wait...');
    setIsShowToast(true);
    setTimeout(() => {
      setIsShowToast(false);
    }, 2000);
  };

  return { isShowToast, showToast, toastTitle };
};
