import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubRepo } from '../interface/GithubRepo';
import { GithubUser } from '../interface/GithubUser';








@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL: string = 'https://api.github.com/users/'

  constructor(
    private http: HttpClient
  ) { }
  
  // 1° precisamos do metodo http para fazer a requisição
    // 2° precisamos da baseURL
    // 3° precisamos ter o user fornecido no frontend
    // 4° juntar as informação atravez de concatenação
  procurarUsuario(username: string): Observable<GithubUser>{    
    return this.http.get<GithubUser>(`${this.baseURL}${username}`)
  }

  procurarRepos(username: string) {
    return this.http.get<GithubRepo[]>(`${this.baseURL}${username}/repos`)
  }

}
