export interface ButtonProps {
  type?: ButtonTypes;
  isDisabled?: boolean;
  size?: ButtonSize;
  text: React.ReactNode | React.ReactNode[];
};

type ButtonTypes = 'primary' | 'secondary' | 'destructive';
type ButtonSize = 'small' | 'large';
