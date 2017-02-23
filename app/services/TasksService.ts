import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {
    private _tasksUrl = 'app/mocked-data/tasks.json';
    private _taskColumnMetadataUrl = 'app/mocked-data/tasksColumnMetadata.json';

    constructor(private http: Http) { }
    public getTasks = () => {
        return this.http.get(this._tasksUrl)
            .map(res => res.json())
            .catch(err => {
                return Observable.throw(err || 'no json file exists');
            });
    }

    public getTasksColumnMetaData = () => {
        return new Promise((resolve, reject) => {
            this.http.get(this._taskColumnMetadataUrl).subscribe(res => {
                resolve(res.json());
            });
        });
    }
}
