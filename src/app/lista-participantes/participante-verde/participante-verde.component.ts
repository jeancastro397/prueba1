import { Component, OnInit, Input } from '@angular/core';
import { IParticipante } from '../types/IParticipante';

@Component({
  selector: 'app-participante-verde',
  templateUrl: './participante-verde.component.html',
  styleUrls: ['./participante-verde.component.scss'],
})
export class ParticipanteVerdeComponent  implements OnInit {

  @Input()
  public verde: IParticipante[] = [];

  constructor() { }

  ngOnInit() {}

}
