import { Injectable } from '@angular/core';

@Injectable()
export class Global {

    public qCount = 5;
    public total = 10;
    public BaseURL = 'http://localhost:40641/api/';

    // ddl selected values
    public lstAbwab;
    
    constructor() {

    }
}
