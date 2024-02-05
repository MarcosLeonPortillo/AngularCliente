import { Component, input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>
      games works!
    </p>
    <p> Los juegos favoritos de {{ nombreUsuario }} son estos: </p>
    <ul> 
      @for (game of games; track game.id){
        <li> {{ game.name }} </li>
      }
    </ul>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @input() nombreUsuario: string = '';
  games= [
    {
id: 1, 
name: "Alone in the dark",
},

{
  id: 2, 
  name: "Need for speed 3",
  },

  {
    id: 3, 
    name: "Alone in the dark",
    },
]
}
