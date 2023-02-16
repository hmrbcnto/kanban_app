import ModalForm from '@/components/ModalForm';
import { useState, useEffect } from 'react';
import ModalContext, { ModalMethod, ModalType } from './Modal';

const ModalContextWrapper: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>('');
  const [modalMethod, setModalMethod] = useState<ModalMethod>('');

  const toggleModalVisibility = (type: ModalType, method: ModalMethod) => {
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
    />
    { children }
  </ModalContext.Provider>
};

export default ModalContextWrapper;
