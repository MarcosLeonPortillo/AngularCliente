import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template:`
  // <h1> Hola mundo </h1>
  // {{ title }}
  // {{ city }}
  // `,
  styleUrl: './app.component.css'
  // styles:`
  // h1{
  //   color: pink;
  // }
  // `,
})
export class AppComponent {
  title: string = 'Angular17';
  city: string = "Casablanca";

}
