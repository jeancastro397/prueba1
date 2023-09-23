import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaParticipantesPageRoutingModule } from './lista-participantes-routing.module';

import { ListaParticipantesPage } from './lista-participantes.page';
import { MostrarParticipanteComponent } from './mostrar-participante/mostrar-participante.component';
import { ParticipanteVerdeComponent } from './participante-verde/participante-verde.component';
import { ParticipanteRojoComponent } from './participante-rojo/participante-rojo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaParticipantesPageRoutingModule
  ],
  declarations: [
    ListaParticipantesPage,
    MostrarParticipanteComponent,
    ParticipanteVerdeComponent,
    ParticipanteRojoComponent]
})
export class ListaParticipantesPageModule {}
