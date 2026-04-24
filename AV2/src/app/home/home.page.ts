import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonIcon, 
  IonButton 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { schoolOutline, peopleOutline, locationOutline } from 'ionicons/icons';
// 1. Importe o RouterModule aqui
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardContent, 
    IonIcon, 
    IonButton,
    // 2. Adicione o RouterModule aqui na lista de imports
    RouterModule 
  ],
})
export class HomePage {
  constructor() {
    addIcons({ schoolOutline, peopleOutline, locationOutline });
  }
}