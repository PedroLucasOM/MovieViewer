import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  fonte = 100;
  fonteTitulo = 150;
  flagAltoContraste = false;

  text: string;
  flagReturnHome = false;
  @Output() searchMoviesEvent = new EventEmitter();
  @Output() returnHome = new EventEmitter();

  @Output() altoContraste = new EventEmitter();
  @Output() diminuirFonte = new EventEmitter();
  @Output() aumentarFonte = new EventEmitter();
  @Output() normalizarFonte = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSearchMovies() {
    if (this.text && this.text.trim()) {
      this.searchMoviesEvent.emit(this.text);
    } else {
      this.messageService.add({severity: 'warn', summary: 'Texto não pode ser vazio', detail: 'Preencha o campo de pesquisa!'});
    }
  }

  onReturnHome() {
    this.text = '';
    this.flagReturnHome = true;
    this.returnHome.emit(this.flagReturnHome);
  }

  onDiminuirFonte() {
    this.fonte = this.fonte - 10;
    this.fonteTitulo = this.fonteTitulo - 10;
    this.diminuirFonte.emit();
  }

  onAumentarFonte() {
    this.fonte = this.fonte + 10;
    this.fonteTitulo = this.fonteTitulo + 10;
    this.aumentarFonte.emit();
  }

  onNormalizarFonte() {
    this.fonte = 100;
    this.fonteTitulo = 150;
    this.normalizarFonte.emit();
  }

  onAltoContraste() {
    this.flagAltoContraste = !this.flagAltoContraste;
    this.altoContraste.emit(this.flagAltoContraste);
  }

}
