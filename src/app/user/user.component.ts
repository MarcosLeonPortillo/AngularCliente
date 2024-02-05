import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = "Marcos";
  estaLogado: boolean = false;

  saludar (): void {
    alert ("Hola, " + this.username);
  }

  cambiarEstado(): void{
    this.estaLogado =! this.estaLogado;
  }
}
