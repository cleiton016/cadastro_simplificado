import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoa = null;
  lista = [];
  adicionar() {
    if (this.pessoa != null) {
      this.lista.push(this.pessoa);
    }
    this.pessoa = null;
  }
}
