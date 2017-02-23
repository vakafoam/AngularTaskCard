import { Component, Input } from '@angular/core';

import { Task } from '../model/task';
import { AppComponent } from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css']
})
export class CardComponent { 
    @Input() task: Task;

    private isVisible: boolean = true;

    statusToggle() {
        this.task.completed = !this.task.completed;
    }

    disposeIt() {
        this.isVisible = false;
        // TODO: use removeTask() method of the AppComponent
    }
}