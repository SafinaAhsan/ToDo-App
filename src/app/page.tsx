import AddToDo from "./add-new-todos";
import TodoList from "./todo-list"


export default function Home(){
  return(
    <div className="min-h-screen flex justify-center items-center ">
       <div className="border border-white p-16 max-w-lg bg-slate-300 ">
      <h1 className="text-black text-center font-semibold text-2xl mb-8">TODO APP</h1>
      <div className="mb-8">
      <AddToDo/>
      </div>
    <div><TodoList/></div>
      </div>
    </div>
  
  )
}