import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getMatIconNoHttpProviderError } from '@angular/material/icon';
import { GithubUser } from './interface/GithubUser';




import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser
  

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService
  ) {}

  procurar(){
    const username = this.githubForm.get('username')?.value // recuperando o nome de usuario que deve ser procurado

    // 1° sucesso
    // 2° erro
    // 3° completo
    this.githubService.procurarUsuario(username).subscribe(
      (user) => {
        this.gUser = user
      }
    )

    this.githubService.procurarRepos(username).subscribe(
      (repos) => {
        console.log(repos)
      }
    )
  }
}
