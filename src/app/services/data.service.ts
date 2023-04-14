import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async login(email: string, password: string) : Promise<BaseResponse<object>> {
    const success = email === 'teste@teste.com' && password === '123';
    return await this.requestExampleTest({
      success: success,
      data: {
        token: "earteeaaaerasijodjoeowieoeuoeoueousoiusoiajpoiajpoidjfpoaijsdfpoainvpoanviopasjvoiaoiajdsofjoiadjsf",
        user: {
          id: "093sdfg34-87df9879f87-dfgfj345345",
          email: email
        }
      },
      errors: [
        { code: "001", message: "Usuário ou senha inválidos, tente novamente." }
      ]
    });
  }

  async logout(email: string) {
    return this.requestExampleTest({
      success: true,
      data: null,
      errors: null
    });
  }

  requestExampleTest(response: object): Promise<BaseResponse<object>>{
    return new Promise(resolve => {
      setTimeout(() => resolve(response as BaseResponse<object>), 1000);
    });
  }
}

export class Error {
  code!: string;
  message!: string;
}

export class BaseResponse<T> {
  success!: boolean;
  data!: T;
  errors!: Error[];
}