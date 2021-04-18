import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  
  getTodos = async() => {
    const getTodosUrl = 'http://app-server-nest.herokuapp.com/todos/'

    await fetch(getTodosUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.log(error);
      //console.error('Error:', error);
    })
  }  

  createTodo = async(user_name :any,todo_content :any) => {
    const postTodoUrl = 'http://app-server-nest.herokuapp.com/todos/';
    console.log(user_name);
    const postObject = {
      name:user_name,
      todo:todo_content
    };
    console.log(JSON.stringify(postObject));
    await fetch(postTodoUrl,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postObject)
        }
      )
    .then(response => {
      response.json();
    })
    .then(data => console.log(data))
    .catch((error) => {
      console.log(error);
      //console.error('Error:', error);
    })
  }
}
