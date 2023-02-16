import { ModalMethod, ModalType } from "@/context/modal/Modal";

export interface ModalFormProps {
  type: ModalType;
  method: ModalMethod;
  isVisible: boolean;
  closeFunction: () => void;
  modalTitle?: string;
  status?: string;
}