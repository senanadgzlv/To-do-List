const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');



//function
const addTodo=(event)=>{
 
    event.preventDefault();

    //todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add('todo');
    //Create Li
    const newTodo=document.createElement('li');
newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark Button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check" ></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash" ></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to List
todoList.appendChild(todoDiv);
//To do clear input value
todoInput.value="";
}


//Delete check
const deleteCheck=(e)=>{
   const item=e.target;
   //Delete Todo
   if (item.classList[0]==="trash-btn"){
       const todo=item.parentElement;

       //Animation
       todo.classList.add('fall');
       todo.addEventListener('transitionend',function(){
           todo.remove();
       })


   }

   //Check mark
   if(item.classList[0]==="complete-btn"){
       const todo=item.parentElement;
       todo.classList.toggle('completedButton');
   }

}

//Events
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);