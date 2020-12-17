import { Component } from '@angular/core';
import  {Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ToDO List';
  todos: Todo[] = [] ;
  name =""
  editable = false;
  addButton='+';
  editableIndex = 0;
  isChecked =  false;
  alert = false;

  
 add() {

  if(this.editable === true){
   const todosList : Todo = {
      name : this.name,
      editable : this.editable
   }
   this.todos.splice(this.editableIndex ,1,todosList);
   this.addButton='+';
   this.editable = false;
   this.name='';

  }else{
      
  let todoList : Todo = {
    name : this.name,
    editable: this.editable
  }
   this.todos.splice(0,0,todoList)
   this.name = "";

  }
 }

 edit(item,index){
  this.editable = true;
  this.addButton = "Update";
  this.name = item;
  this.editableIndex = index;

}

  delete(index) {
    this.todos.splice(index,1); 
    alert("Deleted Value"); 
     }


     FieldsChange(values:any){
      if(values.currentTarget.checked === true){
      this.alert = true;
     } else{
       this.alert = false;
     }
    }
  
}
