import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonRange, IonButton, IonButtons, IonBackButton 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // Importante para o ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trajetoria',
  templateUrl: './trajetoria.page.html',
  styleUrls: ['./trajetoria.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonRange, 
    IonButton, IonButtons, IonBackButton, FormsModule, CommonModule
  ],
})
export class TrajetoriaPage {
  // Variáveis para armazenar as cores (0 a 255)
  redValue: number = 127;
  greenValue: number = 127;
  blueValue: number = 127;

  // Variáveis que controlarão as cores aplicadas
  colorBtn1: string = '#0054e9'; // Cor inicial padrão
  bgColorPage: string = '#ffffff'; // Fundo inicial branco

  constructor() {}

  // Botão 1: Altera a própria cor
  mudarCorBotao() {
    this.colorBtn1 = `rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }

  // Botão 2: Altera a cor de fundo da tela
  mudarFundoTela() {
    this.bgColorPage = `rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }
}