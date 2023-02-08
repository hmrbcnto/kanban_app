export interface SwitchProps {
  onClick: () => void;
  switchColor?: string;
  leftIcon?: React.ReactNode | React.ReactNode[];
  rightIcon?: React.ReactNode | React.ReactNode[];
  checked: boolean;
};
