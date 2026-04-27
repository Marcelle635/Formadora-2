import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonIcon, 
  IonButton,
  IonInput 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; 
import { 
  schoolOutline, 
  peopleOutline, 
  locationOutline, 
  keyOutline,      
  sunnyOutline,
  checkmarkOutline // Adicionado para o botão de confirmar
} from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardContent, 
    IonIcon, 
    IonButton,
    IonInput,
    RouterModule 
  ],
})
export class HomePage {

  // Variáveis para a lógica da palavra-chave
  tempPalavra: string = '';
  palavraFixada: boolean = false;

  constructor(private router: Router) {
    // Registra todos os ícones utilizados no projeto
    addIcons({ 
      schoolOutline, 
      peopleOutline, 
      locationOutline, 
      keyOutline, 
      sunnyOutline,
      checkmarkOutline
    });
  }

  /**
   * Fixa a palavra-chave e altera o estado da tela
   */
  fixarPalavra() {
    if (this.tempPalavra && this.tempPalavra.trim().length > 0) {
      console.log('Palavra confirmada:', this.tempPalavra);
      this.palavraFixada = true;
    } else {
      console.warn('Campo vazio. Digite uma palavra antes de confirmar.');
    }
  }

  /**
   * Navegação para a página de trajetória
   */
  irParaTrajetoria() {
    this.router.navigate(['/trajetoria']).then(sucesso => {
      if (sucesso) {
        console.log('Navegação OK');
      } else {
        console.error('Erro na navegação: Verifique a rota no app.routes.ts');
      }
    });
  }
}