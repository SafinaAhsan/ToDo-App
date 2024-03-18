"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { handleRefresh } from "./todo";

async function addToDO(content: string) {
  const response = await fetch("http://localhost:8000/todos/", {
    method: "POST",
    body: JSON.stringify({ content }),
    headers: { "Content-Type": "application/json" },
  });
  handleRefresh();
}

const AddToDo = () => {
  const [text, setText] = useState("");
  
  const handleAddToDO = async () => {
    await addToDO(text);
    setText("");
  };

  return (
    <div className="flex justify-between gap-2 items-center mt-2">
      <Input onChange={(e) => setText(e.target.value)} value={text} className="h-6"></Input>
      <Button onClick={handleAddToDO}>ADD</Button>
    </div>
  );
};

export default AddToDo;
