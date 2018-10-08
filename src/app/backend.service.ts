import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BackendService implements InMemoryDbService {
  createDb() {
    let user = [
      { id: 1, userName: 'mail@gmail.com', password: '12345' },
      { id: 2, userName: '123@gmail.com', password: '12345' },
      { id: 3, userName: 'asdf@gmail.com', password: '12345' },
      { id: 4, userName: 'tornado@yahoo.com', password: '12345' }
    ];

    return {user};
  }
}
