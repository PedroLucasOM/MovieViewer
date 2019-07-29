import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  text: string;
  flagReturnHome = false;
  @Output() searchMoviesEvent = new EventEmitter();
  @Output() returnHome = new EventEmitter();

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

}
