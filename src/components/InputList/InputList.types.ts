export interface InputListProps {
  initialValue?: string[];
  onChange: (e: string, index: number) => void;
  onRemove: (index: number) => void;
  onAdd?: () => void;
  value: string[];
  titleText?: string;
};
