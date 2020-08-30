import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponsePageable} from 'src/app/shared/models/responsePageable.models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiUrl = 'https://localhost:5001/api/players';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + flag);
  }
}
