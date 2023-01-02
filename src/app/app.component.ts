import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<any>;
  todos: Array<any>;
  todotext:'' ;
  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'todos');
    this.todos$ = collectionData(coll);

    this.todos$.subscribe((newTodos) => {
      console.log('Neue Todos sind:', newTodos)
      this.todos = newTodos;
    });
  }

  addTodo(){
    const coll = collection(this.firestore, 'todos');
    setDoc(doc(coll, "your-id"), {name: this.todotext});
  }
}
function setDoc(arg0: any, infos: any) {
  throw new Error('Function not implemented.');
}

function doc(notesRef: any, arg1: string): any {
  throw new Error('Function not implemented.');
}

