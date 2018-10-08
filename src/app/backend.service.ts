import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BackendService implements InMemoryDbService {
  createDb() {
    let user = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];

    return {user};
  }
}
