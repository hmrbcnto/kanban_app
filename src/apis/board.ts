import { ColumnTaskProps } from "@/components/ColumnTask/ColumnTask.types"

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

export const BoardAPI = {
  getBoardData
}
