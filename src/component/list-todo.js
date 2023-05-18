import { useEffect, useState } from "react";
import http from "../http-common";

const ListesTodos = () => {

    const [Todos, setTodos] = useState([]);

     function listTodos() {
        http.get("/todo").then((response) => {
            console.log(response.data);
            setTodos(response.data);

            const dat = response.data;
        

        }).catch((error) => {
            console.log(error);
        })
    }
    function deleteTodo(id) {
  
         http.delete("/todo/" + id).then((response) => {
            console.log(response.data);
            setTodos(response.data);

            const dat = response.data;
        

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
               <h3 className="max-w-2xl text-2xl font-bold leading-tight text-center sm:text-3xl md:text-2xl md:leading-tight">Liste des todos</h3>
                 
                {
               Todos.map((item) => 
                     
               (
                            <span key={item.id} className="m-2">
                               <small>{item.name}</small> &nbsp;&nbsp;<button className="px-2 py-2 font-bold text-white rounded-lg  bg-red-600" onClick={deleteTodo}>Delete</button>
                           </span>
                  )
                       
                   )
                  }
               
           </div>
    </div>
  );
    
}

export default ListesTodos;