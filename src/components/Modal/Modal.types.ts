export interface ModalProps {
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  isVisible?: boolean;
  closeFunction?: () => void;
};
