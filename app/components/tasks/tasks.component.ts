import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/TasksService';

@Component({
    moduleId: module.id,
    selector: 'mp-tasks',
    templateUrl: 'tasks.component.html',
    styleUrls: ['tasks.component.css'],
})
export class TasksComponent implements OnInit {
    tasks;
    columns;
    searchTasksFilter;
    isTasksLoaded = false;
    orderBy = {
        columnName: 'storyPoints',
        desc: false
    };

    constructor(private tasksService: TasksService) { }

    ngOnInit() {
        this.tasksService.getTasksColumnMetaData().then(columns => this.columns = columns);
        this.tasksService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
            this.isTasksLoaded = true;
        });
    }

    chosenColumn(columnName) {
        return columnName === this.orderBy.columnName ? 'desc-' + this.orderBy.desc : false;
    }

    applyOrderBy = () => this.orderBy;

    changeSorting = (column) => {
        column.desc = !column.desc;
        this.orderBy = {
            columnName: column.name,
            desc: column.desc
        };
    }
}
