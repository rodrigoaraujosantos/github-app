import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubUser } from '../interface/GithubUser';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService
  ) { }

  ngOnInit(): void {
  }

  recebendoUsernameHtlm(){
    const username = this.githubForm.get('username')?.value // recuperando o nome de usuario que deve ser procurado

    // 1° sucesso
    // 2° erro
    // 3° completo
    this.githubService.procurarUsuario(username).subscribe((pegoOsDados) => {
        this.gUser = pegoOsDados
      }
    )
  }

}
