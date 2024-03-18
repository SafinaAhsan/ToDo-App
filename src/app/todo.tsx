"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Delete, Edit } from "lucide-react"
import { useState } from "react";

interface TodoProps {
  todo: {
    content: string,
    id: number
  }
}
export const handleRefresh=()=>{
  window.location.reload()
}
async function deleteTodo(id: number) {
  await fetch(`http://localhost:8000/todos/${id}`, {
    method: "DELETE"
  })
  handleRefresh()
}

async function updateTodo(id: number, updatedContent: string) {
  await fetch(`http://localhost:8000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({content:updatedContent})
  })
  handleRefresh()
}
const Todo = ({ todo }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(todo.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

const handleUpdate = () => {
    updateTodo(todo.id,  updatedContent);
    setIsEditing(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedContent(e.target.value);
  };

  const handleDelete = () => {
     deleteTodo(todo.id)
  };
 
  return (
    <div className="flex items center justify-between border border-gray-900 mb-3 mt-2 px-2 py-1">
      {isEditing ? (
        <div className="gap-2 flex items-center justify-between">
          <Input
            value={updatedContent}
            onChange={handleInputChange}
            className="px-2 py-4 h-8"
          />
          <Button className="px-2 py-4 h-8" onClick={handleUpdate}>Update</Button>
         
          </div>
      ) : (
        <>
          <p className="text-lg font-medium">{todo.content}</p>
          <div className="flex items-center gap-4 cursor-pointer">
            <Edit onClick={handleEdit} />
            <Delete onClick={handleDelete} />
          </div>
        </>
      )}
    </div>
  );
};


export default Todo