export interface TaskFormProps {
  type: TaskFormType;
  initialValues?: TaskFormReducer;
  submitFunction?: () => void;
};

type TaskFormType = 'create' | 'modify' | 'delete';

export interface TaskFormReducer {
  title?: string;
  description?: string;
  subTasks?: string[];
  status?: string;
  type?: string;
  updatedSubtask?: {
    index: number;
    value?: string;
  }
}
