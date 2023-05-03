"use client";

import { useContext } from "react";

import { MessagesContext } from "@/context/messages";

interface ChatMessagesProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChatMessages: React.FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext);

  return <div {...props}>ChatMessage</div>;
};

export default ChatMessages;
