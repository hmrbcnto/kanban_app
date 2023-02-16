import React from 'react';
import ModifyForm from './Modify';
import { TaskFormProps } from './TaskForm.types';

const TaskForm: React.FC<TaskFormProps> = ({
  type,
  initialValues,
  submitFunction
}) => {
  const renderForm = () => {
    switch (type) {
      case 'modify':
        return <ModifyForm />
    }
  }
  return (
    <>
      {renderForm()}
    </>
  )
};

export default TaskForm;
