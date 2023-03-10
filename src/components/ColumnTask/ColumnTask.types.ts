export interface ColumnTaskProps {
  status: string;
  description?: string;
  subtasks: SubtaskProps[];
  onClick: () => void;
  name: string
};

export interface SubtaskProps {
  status: 'pending' | 'done';
  name: string;
};
