import Button from '@/components/Button';
import React from 'react';
import { ConfirmationFormProps } from './ConfirmationForm.types';

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({
  cancelFunction,
  submitFunction,
  descriptionText
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-medium_grey">{descriptionText}</p>
      <div className="flex flex-col gap-2 w-full md:flex-row">
        <Button
          type="destructive"
          text="Delete"
          onClick={submitFunction}
        />
        <Button
          type="secondary"
          text="Cancel"
          onClick={cancelFunction}
        />
      </div>
    </div>
  )
};

export default ConfirmationForm;
