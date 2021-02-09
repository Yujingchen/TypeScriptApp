import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos/10'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    //
    const todo = res.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed)
    // console.log(res.data)
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    Todo with ID:${id}
    Title:${title}
    Finished:${completed}`)
}