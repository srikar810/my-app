import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserServiceService {

  constructor(private http: Http) { }

  getUsers(): any {
    const HEROES: any[] = [
      { id: 11, name: 'Mr. Nice',temp:30 },
      { id: 12, name: 'Narco' ,temp:30},
      { id: 13, name: 'Bombasto' ,temp:30},
      { id: 14, name: 'Celeritas' ,temp:30},
      { id: 15, name: 'Magneta' ,temp:30},
      { id: 16, name: 'RubberMan' ,temp:30},
      { id: 17, name: 'Dynama' ,temp:30},
      { id: 18, name: 'Dr IQ' ,temp:30},
      { id: 19, name: 'Magma' ,temp:30},
      { id: 20, name: 'Tornado' ,temp:30}
    ];
    return HEROES;
  }

  getUser() {
    return this.http.get(`http://localhost:3000/api/users`)
    .map((res:Response) => res.json());
  }

}
