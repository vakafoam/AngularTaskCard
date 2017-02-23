import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css']
})

export class AppComponent {
    private tasks: Task[] = [
         /*
         new Task ( "Buy a monkey", false),
         new Task ( "Walk the turtle", false)
         */
    ]
    
    private currentTask = new Task (null, false);

    addTask () {                    // ?str - optional string paramenter
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null;
    }

    removeTask(t:Task) {
       console.log(this.tasks.length);
       this.tasks.splice(this.tasks.indexOf(t), 1);
       console.log(this.tasks.length);
    }
}