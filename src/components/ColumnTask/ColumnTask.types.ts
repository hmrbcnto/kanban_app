export interface ColumnTaskProps {
  taskHeader?: string;
  status: 'todo' | 'doing' | 'done';
  description?: string;
  subtasks: SubtaskProps[];
  onClick: () => void;
};

export interface SubtaskProps {
  status: 'pending' | 'done';
  name: string;
};
