import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
import { addIcons } from 'ionicons'; // Necessário para registrar os ícones
import { schoolOutline, peopleOutline, locationOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router'; // Importante para diretivas de link

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
    RouterModule // Permite o uso de routerLink no HTML, se desejar
  ],
})
export class HomePage {

  constructor(private router: Router) {
    // Registra os ícones que estamos usando no HTML
    addIcons({ schoolOutline, peopleOutline, locationOutline });
  }

  /**
   * Função para navegar até a página de trajetória.
   * Usar navegação via TypeScript ajuda a identificar erros no console (F12).
   */
  irParaTrajetoria() {
    console.log('Iniciando navegação para a página de trajetória...');
    this.router.navigate(['/trajetoria']).then(sucesso => {
      if (sucesso) {
        console.log('Navegação concluída com sucesso!');
      } else {
        console.error('Falha na navegação. Verifique se a rota existe no app.routes.ts');
      }
    });
  }
}