import { ColumnTaskProps } from "../ColumnTask/ColumnTask.types";

export interface BoardColumnProps {
  name: string;
  tasks?: ColumnTaskProps[];
  onClick: () => void;
};
