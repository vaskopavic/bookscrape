"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import TextareaAutosize from "react-textarea-autosize";
import { nanoid } from "nanoid";

import { cn } from "@/lib/utils";
import { Message } from "@/lib/validators/message";

interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChatInput: React.FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>("");

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: "hello" }),
      });

      return response.body;
    },
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className="relative flex-1 mt-4 overflow-hidden border-none rounded-lg outline-none">
        <TextareaAutosize
          rows={2}
          maxRows={4}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
              setInput("");
            }
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          placeholder="Write a message..."
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default ChatInput;
