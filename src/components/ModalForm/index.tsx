import React from 'react';
import BoardForm from '../Forms/BoardForm';
import TaskForm from '../Forms/TaskForm';
import Modal from '../Modal';
import { ModalFormProps } from './ModalForm.types';

const ModalForm: React.FC<ModalFormProps> = ({
  method,
  type,
  isVisible,
  closeFunction
}) => {
  const renderModalForm = () => {
    switch(type) {
      case 'board':
        return <BoardForm type="create" submitFunction={() => {}} initialValues={{}}/>
      case 'task':
        return <TaskForm type="modify" />
    }
  }
  return (
    <Modal
      isVisible={isVisible}
      closeFunction={closeFunction}
      title="Sample Title"
    >
      {renderModalForm()}
    </Modal>
  )
}

export default ModalForm;
