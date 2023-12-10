import { Card } from '@mantine/core';
import { Message } from '../Message';
import './MessagesHistory.css';
import { useChatStore } from '@/store';

export const MessagesHistory = () => {
  const { messages } = useChatStore();

  return (
    <Card withBorder padding="md" className="messages">
      {messages.map((message, idx) => (
        <Message
          content={message.type}
          orientation={message.direction}
          message={message.payload}
          key={idx}
        />
      ))}
    </Card>
  );
};
