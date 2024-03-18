"use client"
import { useEffect, useState } from "react";
import Todo from "./todo";

export interface Api {
  content: string;
  id: number;
}

export default function TodoList() {
  const [data, setData] = useState<Api[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/todos/", { method: "GET" });
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      {data.map((api) => (
        <div key={api.id}>
          <Todo todo={api} />
        </div>
      ))}
    </div>
  );
}
