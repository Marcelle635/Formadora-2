import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonRange, 
  IonButton, 
  IonButtons, 
  IonBackButton,
  IonItem,
  IonLabel,
  NavController // Adicionado para navegação via código
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trajetoria',
  templateUrl: './trajetoria.page.html',
  styleUrls: ['./trajetoria.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonRange, 
    IonButton, 
    IonButtons, 
    IonBackButton, 
    IonItem, 
    IonLabel,
    FormsModule, 
    CommonModule
  ],
})
export class TrajetoriaPage {
  redValue: number = 127;
  greenValue: number = 127;
  blueValue: number = 127;

  colorBtn1: string = '#0054e9'; 
  bgColorPage: string = '#ffffff'; 

  // Injetando o NavController para o botão 3 poder voltar
  constructor(private navCtrl: NavController) {}

  mudarCorBotao() {
    this.colorBtn1 = `rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }

  mudarFundoTela() {
    this.bgColorPage = `rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }

  // Função para o Botão 3 retornar à Home
  voltarParaHome() {
    this.navCtrl.back();
  }
}