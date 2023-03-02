import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Input from '@/components/Input';
import InputList from '@/components/InputList';
import TextArea from '@/components/TextArea';
import React, { useReducer } from 'react';
import { TaskFormReducer } from './TaskForm.types';


const ModifyForm: React.FC = () => {
  const dropdownConstants = [
    {
      id: 1,
      key: 1,
      value: 'todo',
      display: 'Todo'
    },
    {
      id: 2,
      key: 2,
      value: 'doing',
      display: 'Doing'
    },
  ]
  const [taskData, updateTaskData] = useReducer((state: any, action: TaskFormReducer) => {
    const newEvent = {...state};

    switch(action.type) {
      case 'updateTitle': 
        newEvent.title = action.title;
        break;
      case 'updateDescription':
        newEvent.description = action.description;
        break;
      case 'updateSubtask':
        if (!action.updatedSubtask) {
          return;
        }
        const updatedSubtasks = [...state.subTasks];
        updatedSubtasks[action?.updatedSubtask?.index] = action.updatedSubtask.value;
        newEvent.subTasks = updatedSubtasks;
        break;
      case 'removeSubtask':
        if (!action.updatedSubtask) {
          return;
        }
        const removedSubtasks = [...state.subTasks];
        removedSubtasks.splice(action.updatedSubtask?.index, 1)
        newEvent.subTasks = removedSubtasks;
        break;
      case 'addSubtask':
        const addedSubtasks = [...state.subTasks];
        addedSubtasks.push('');
        newEvent.subTasks = addedSubtasks;
        break;
      case 'updateStatus':
        newEvent.status = action.status;
        break;
    }

    return newEvent;
  }, {
    title: '',
    description: '',
    subTasks: [],
    status: ''
  });

  const subTaskOnChange = (e: string, index: number) => updateTaskData({
    type: 'updateSubtask',
    updatedSubtask: {
      value: e,
      index
    }
  });

  const subTaskOnRemove = (index: number) => updateTaskData({
    type: 'removeSubtask',
    updatedSubtask: {
      index
    }
  });
  
  const subTaskOnAdd = () => updateTaskData({
    type: 'addSubtask'
  });

  return (
    <div className="flex flex-col gap-2">
      <Input
        titleText="Title"
        value={taskData.title}
        placeholder="e.g. Take coffee break"
        onChange={(e: string) => {
          updateTaskData({ type: 'updateTitle', title: e });
        }}
      />
      <TextArea
        titleText="Description"
        value={taskData.description}
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
        onChange={(e: string) => {
          updateTaskData({ type: 'updateDescription', description: e});
        }}
        rows={4}
      />
      <InputList
        initialValue={taskData.subTasks}
        onChange={subTaskOnChange}
        onRemove={subTaskOnRemove}
        onAdd={subTaskOnAdd}
        value={taskData.subTasks}
        titleText="Subtasks"
        addButtonText="+ Add New Subtask"
      />
      <Dropdown
        id="status"
        key="status"
        dropdownItems={dropdownConstants}
        onChange={(value) => updateTaskData({ type: 'updateStatus', status: value })}
        value={taskData.status}
        title="Status"
      />
      <div className="w-full">
        <Button
          type="primary"
          text="Create Task"
        />
      </div>
    </div>

  )
}

export default ModifyForm;