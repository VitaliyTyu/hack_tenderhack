import { Button } from '@mantine/core';
import { useChatStore } from '@/store';
import { FormMessage } from '@/shared/types';

import './FormMessagesPicker.css';

export const FormMessagesPicker = () => {
  const { addMessage, sendMessage } = useChatStore();

  const sendFormAgreement = () => {
    addMessage({
      payload: FormMessage.FORM_AGREEMENT,
      type: 'form',
      direction: 'right',
    });
    sendMessage({
      payload: FormMessage.FORM_AGREEMENT,
      type: 'form',
    });
  };

  return (
    <div className="form-picker">
      <Button onClick={sendFormAgreement}>Отправить форму соглашения</Button>
    </div>
  );
};
