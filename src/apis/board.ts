import { ColumnTaskProps } from "@/components/ColumnTask/ColumnTask.types"
import { BoardSummaryObject } from "@/context/board/Board"

export const getBoardData = () => {
  const sampleTasks: ColumnTaskProps[] = [
    {
      taskHeader: 'Sample Column Header',
      status: 'doing',
      description: 'Sample Description',
      subtasks: [
        {
          status: 'pending',
          name: 'Sample Subtask'
        }
      ],
      onClick: () => { console.log('wtf)')}
    }
  ]
  return {
    name: 'Sample Board',
    tasks: sampleTasks
  }
}

export const getBoardList = (): BoardSummaryObject[] => {
  return [
    {
      name: 'Board Item A',
      id: '1'
    },
    {
      name: 'Board Item B',
      id: '2'
    }
  ];
}

export const BoardAPI = {
  getBoardData
}
