import { useEffect, useState } from "react";
import http from "../http-common";

export default function ListTodo() {

    const [todos, setTodos] = useState([]);

     function listTodos() {
        http.get("/todo").then((data) => {
            console.log(data);
            setTodos(data);

        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        listTodos();
      }, []);
   return (

    <div className="w-full px-20 bg-primary-light py-14">
           <div className="flex flex-col items-center max-w-sm mx-auto">
               <h3 className="max-w-2xl text-2xl font-bold leading-tight text-center sm:text-3xl md:text-2xl md:leading-tight">Liste des todos</h3><br />
               {
                   todos.map(item => (
                       <span> {item.name} </span>
                   ))
                  }
               
           </div>
    </div>
  );
    
}