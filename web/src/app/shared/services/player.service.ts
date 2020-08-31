import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlayersPalmeiras } from 'src/app/shared/models/playersPalmeiras.models';

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

  public getAll(): Observable<PlayersPalmeiras[]> {
    return this.httpClient.get<PlayersPalmeiras[]>(this.apiUrl, this.httpOptions);
  }

  public getById(id: string): Observable<PlayersPalmeiras> {
    const url = `${this.apiUrl}/${id}`;

    return this.httpClient.get<PlayersPalmeiras>(url);
  }

  public update(id: string, player: any): Observable<PlayersPalmeiras> {
    const url = `${this.apiUrl}/update/${id}`;

    return this.httpClient.put<PlayersPalmeiras>(url, player, this.httpOptions);
  }

  public delete(id: string): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;

    return this.httpClient.delete<any>(url);
  }

  public postPlayer(player: PlayersPalmeiras): Observable<PlayersPalmeiras> {
    return this.httpClient.post<PlayersPalmeiras>(this.apiUrl, player, this.httpOptions);
  }
}
