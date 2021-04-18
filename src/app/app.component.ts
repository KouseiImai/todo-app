import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  
  getTodos = async() => {
    const getTodosUrl = 'http://localhost:8080'

    await fetch(getTodosUrl)
    .then(response => {
      console.log(response);
      response.json();
    })
    .then(data => console.log(data))
    .catch((error) => {
      console.log(error);
      //console.error('Error:', error);
    })
  }  

  createTodo = async() => {
    const postTodoUrl = 'http://app-server-nest.herokuapp.com/todos/';
    const postObject = {
      name:'Taro',
      todo:'myTask3'
    };
    console.log ( JSON.stringify(postObject));

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
