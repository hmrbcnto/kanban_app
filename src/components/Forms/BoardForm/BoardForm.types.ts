export interface BoardFormProps {
  type: BoardFormType;
  initialValues?: BoardFormReducer;
  submitFunction?: () => void;
}

type BoardFormType = 'create' | 'modify';

export interface BoardFormReducer {
  name?: string;
  type?: string;
  columns?: string[];
  updatedColumns?: {
    value?: string,
    index?: number
  }
};
