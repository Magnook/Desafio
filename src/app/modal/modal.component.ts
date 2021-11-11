import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
})
export class ModalComponent {
  mostrar: boolean = false;

  ontoggle () {
    this.mostrar = !this.mostrar;
  }

  acaoPrimaria(){

  }
}