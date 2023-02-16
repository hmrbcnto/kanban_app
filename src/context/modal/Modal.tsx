import { type } from 'os';
import { createContext } from 'react';

interface ModalContextValues {
  type: ModalType;
  method: ModalMethod;
  isModalVisible: boolean;
  setIsModalVisible: (modalVisibleProps: ModalVisibleProps) => void;
  closeFunction: () => void;
};

export type ModalVisibleProps = {
  type: ModalType,
  method: ModalMethod,
  title: string,
  status: string
}

const defaultValue: ModalContextValues = {
  type: '',
  method: '',
  isModalVisible: false,
  setIsModalVisible: (modalVisibleProps: ModalVisibleProps) => {},
  closeFunction: () => {}
};

export type ModalType = 'board' | 'task' | 'warning' | '';
export type ModalMethod = 'create' | 'update' | '';

const ModalContext = createContext(defaultValue);

export default ModalContext;
