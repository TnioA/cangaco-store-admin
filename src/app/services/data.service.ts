import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async login() {
    return this.requestExampleTest();
  }

  requestExampleTest() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true, 
          data: { value: 1 }, 
          errors: [
            { code: "001", message: "Test error"}
          ]
        });
      }, 2000);
    });
  }
}
