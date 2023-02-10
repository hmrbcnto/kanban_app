export interface TextAreaProps { 
  titleText?: string;
  value?: string | number;
  placeholder?: string;
  onChange: (e:string) => void;
  isError?: boolean;
  rows?: number;
};
