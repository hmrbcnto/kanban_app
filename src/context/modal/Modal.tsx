import { createContext } from 'react';

interface ModalContextValues {
  type: ModalType;
  method: ModalMethod;
  isModalVisible: boolean;
  setIsModalVisible: (type: ModalType, method: ModalMethod) => void;
  closeFunction: () => void;
};

const defaultValue: ModalContextValues = {
  type: '',
  method: '',
  isModalVisible: false,
  setIsModalVisible: (type: ModalType, method: ModalMethod) => {},
  closeFunction: () => {}
};

export type ModalType = 'board' | 'task' | 'warning' | '';
export type ModalMethod = 'create' | 'update' | '';

const ModalContext = createContext(defaultValue);

export default ModalContext;
