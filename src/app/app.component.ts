import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declaramos dos variables (aqui estaremos usando el property binding)
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice2.png';

  num1 = 1;
  num2 = 2;

  //Creamos una funcion
  tirarDados(): void {
    this.num1 = Math.round(Math.random() * 5) + 1;
    this.num2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = '../assets/img/dice' + this.num1 + '.png';
    this.dadoDerecha = '../assets/img/dice' + this.num2 + '.png';
  }
}
