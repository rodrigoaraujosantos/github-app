import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepo } from '../interface/GithubRepo';
import { GithubUser } from '../interface/GithubUser';








@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL: string = 'https://api.github.com/users/'

  constructor(
    private http: HttpClient // objeto responsavel por fazer as requisições http no angular
  ) { }

  // metodos http
  // leitura de dados -> get
  // criação de dados -> post
  // atualização de dados -> put
  // delete dados -> delete

  
  
  procurarUsuario(username: string){

    // 1° precisamos do metodo http para fazer a requisição
    // 2° precisamos da baseURL
    // 3° precisamos ter o user fornecido no frontend
    // 4° juntar as informação atravez de concatenação

    
    
    return this.http.get<GithubUser>(`${this.baseURL}${username}`) 
    
    
  }

  procurarRepos(username: string) {
    return this.http.get<GithubRepo[]>(`${this.baseURL}${username}/repos`)
  }

}
