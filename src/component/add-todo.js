/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import http from "../http-common";

export default class AddTodoList extends Component {
       

    handleSubmit = e => {
        e.preventDefault();
        

        const data = {
            name: this.name
        };

        http.post("/todo", data).then(response => {
            
            console.log("data",response)
        }).catch(
            err => {
                console.log(err);
            }
        )

        
    };

    getTodo() {
        
    }

 

    render() {
         
        return (
        <div className="w-full px-20 bg-primary-light py-14">
      <div className="flex flex-col items-center max-w-sm mx-auto">
        <h3 className="max-w-2xl text-2xl font-bold leading-tight text-center sm:text-3xl md:text-2xl md:leading-tight">Todo List</h3>
        <p className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">Application react avec node comme back-end</p>
        <form action="" className="flex flex-col w-full gap-1 px-2 mx-auto mt-6 sm:flex-row" onSubmit={this.handleSubmit}>
            <input className="block w-full mt-1 text-sm dark:bg-gray-700 focus:outline-none dark:text-gray-300 form-input" name="name" value={this.name}
                onChange={ e => this.name = e.target.value}
                        placeholder="Veillez saisir un nom" 
                      />
          <button  className="px-3 py-3 font-bold text-white rounded-lg bg-stone-900" type="submit">Ajouter</button>
        </form>
                </div>
                <div className="flex flex-col items-center max-w-sm mx-auto">
                   

        </div>
    </div>
        )
    }
}