import { Card, Text as MantineText } from '@mantine/core';

import './Message.css';
import { FormMessage, MessageType } from '@/shared/types';
import { FormMessageView } from './sub';

interface Props {
  message: string;
  content: MessageType;
  orientation?: 'right' | 'left';
}

export const Message = ({ content, message, orientation = 'left' }: Props) => {
  const className = `message ${orientation}`;

  if (content === MessageType.FORM) {
    return <FormMessageView type={message as FormMessage} orientation={orientation} />;
  }

  return (
    <Card className={className} shadow="xs" padding="sm" radius="md" withBorder>
      <MantineText size="sm" c="dimmed">
        {message}
      </MantineText>
    </Card>
  );
};
