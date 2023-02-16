import React, { useState } from 'react';
import BoardForm from '../Forms/BoardForm';
import ConfirmationForm from '../Forms/ConfirmationForm';
import TaskForm from '../Forms/TaskForm';
import Modal from '../Modal';
import { ModalFormProps } from './ModalForm.types';

const ModalForm: React.FC<ModalFormProps> = ({
  method,
  type,
  isVisible,
  closeFunction,
  modalTitle,
  status
}) => {
  const descriptionText = 'Are you sure yo uwant to do this? This action is irreversible.';
  const renderModalForm = () => {
    switch(type) {
      case 'board':
        return <BoardForm type="create" submitFunction={() => {}} initialValues={{}}/>;
      case 'task':
        return <TaskForm type="modify" />;
      case 'warning':
        return <ConfirmationForm submitFunction={() => {}} cancelFunction={() => {}} descriptionText={descriptionText}/>;
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      closeFunction={closeFunction}
      title={modalTitle}
      isWarning={status === 'warning' ? true : false}
    >
      {renderModalForm()}
    </Modal>
  )
}

export default ModalForm;
