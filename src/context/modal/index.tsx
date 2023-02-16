import ModalForm from '@/components/ModalForm';
import { useState, useEffect } from 'react';
import ModalContext, { ModalMethod, ModalType, ModalVisibleProps } from './Modal';

const ModalContextWrapper: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>('');
  const [modalMethod, setModalMethod] = useState<ModalMethod>('');
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const toggleModalVisibility = (modalVisibleProps: ModalVisibleProps) => {
    const { type, method, title, status } = modalVisibleProps;
    console.log(modalVisibleProps);
    setTitle(title);
    setStatus(status);
    setModalType(type);
    setModalMethod(method);
    setIsVisible(!isVisible);
  };

  const closeFunction = () => {
    setIsVisible(false);
    setModalType('');
    setModalMethod('');
  }

  return <ModalContext.Provider value={{ 
    type: modalType, 
    isModalVisible: isVisible, 
    method: modalMethod,
    setIsModalVisible: toggleModalVisibility,
    closeFunction
  }}>
    <ModalForm
      type={modalType}
      method={modalMethod}
      isVisible={isVisible}
      closeFunction={closeFunction}
      status={status}
      modalTitle={title}
    />
    { children }
  </ModalContext.Provider>
};

export default ModalContextWrapper;
