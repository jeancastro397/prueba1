import { Component, Input, OnInit } from '@angular/core';
import { IParticipante } from '../types/IParticipante';

@Component({
  selector: 'app-participante-rojo',
  templateUrl: './participante-rojo.component.html',
  styleUrls: ['./participante-rojo.component.scss'],
})
export class ParticipanteRojoComponent  implements OnInit {

  @Input()
  public rojo: IParticipante[] = [];

  constructor() { }

  ngOnInit() {}

}
