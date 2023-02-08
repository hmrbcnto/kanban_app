export interface SwitchProps {
  onClick: () => void;
  onColor?: string;
  offColor?: string;
  leftIcon?: React.ReactNode | React.ReactNode[];
  rightIcon?: React.ReactNode | React.ReactNode[];
  isChecked: boolean;
};
