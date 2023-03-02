import Button from '@/components/Button';
import Input from '@/components/Input';
import InputList from '@/components/InputList';
import React, { useReducer } from 'react';
import { BoardFormProps, BoardFormReducer } from './BoardForm.types';

const BoardForm: React.FC<BoardFormProps> = ({
  type='create',
  initialValues,
  submitFunction
}) => {
  const [boardData, updateBoardData] = useReducer((state: any, action: BoardFormReducer) => {
    const newEvent = {...state};

    switch(action.type) {
      case 'updateName': 
        newEvent.name = action.name;
        break;
      case 'updateColumn':
        if (!action.updatedColumns?.index) {
          return;
        }
        const updatedColumns = [...state.columns];
        updatedColumns[action?.updatedColumns?.index] = action?.updatedColumns?.value;
        newEvent.columns = updatedColumns;
        break;
      case 'removeColumn':
        if (!action.updatedColumns?.index) {
          return;
        }
        const removedColumns = [...state.columns];
        removedColumns.splice(action?.updatedColumns?.index, 1);
        newEvent.columns = removedColumns;
        break;
      case 'addColumn':
        const addedColumns = [...state.columns];
        addedColumns.push('');
        newEvent.columns = addedColumns;
        break;
    }

    return newEvent;
  }, {
    name: '',
    columns: []
  });

  const columnOnChange = (e: string, index: number) => updateBoardData({
    type: 'updateColumn',
    updatedColumns: {
      value: e,
      index
    }
  });

  const columnOnRemove = (index: number) => updateBoardData({
    type: 'removeColumn',
    updatedColumns: {
      index
    }
  });

  const columnOnAdd = () => updateBoardData({
    type: 'addColumn'
  });

  return (
    <div className="flex flex-col gap-2">
      <Input
        titleText="Board Name"
        value={boardData?.name}
        placeholder="e.g. Web Design"
        onChange={(name: string) => {
          updateBoardData({ type: 'updateName', name})
        }}
      />
      <InputList
        initialValue={boardData?.columns}
        onChange={columnOnChange}
        onRemove={columnOnRemove}
        onAdd={columnOnAdd}
        value={boardData?.columns}
        titleText="Board Columns"
        addButtonText="+ Add New Columns"
      />
      <div className="w-full">
        <Button
          type="primary"
          text="Create New Board"
        />
      </div>
    </div>
  )
}


export default BoardForm;