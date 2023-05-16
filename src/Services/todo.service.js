/* eslint-disable import/no-anonymous-default-export */
import http from "../http-common";

class TodoService {
    getToto() {
        return http.get("/todo");
    }

    createTodo(data) {
        return http.post("/todo", data);
    }

    delete(id) {
        return http.delete(`/todo/${id}`);
    }

}

export default new TodoService();