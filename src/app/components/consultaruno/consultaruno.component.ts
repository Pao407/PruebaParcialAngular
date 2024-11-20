import { Component } from '@angular/core';

@Component({
  selector: 'app-consultaruno',
  templateUrl: './consultaruno.component.html',
  styleUrls: ['./consultaruno.component.css']
})
export class ConsultarUnoComponent {
  contratos = [
    {
      id: 1,
      identificador: 'Contrato 1',
      valor: 1000,
      nombre_contratante: 'Juan Perez',
      documento_contratante: '123456789',
      nombre_contratantista: 'Maria Lopez',
      documento_contratantista: '987654321',
      fecha_inicial: '2023-01-01',
      fecha_final: '2023-12-31'
    },
    {
      id: 2,
      identificador: 'Contrato 2',
      valor: 2000,
      nombre_contratante: 'Carlos Sanchez',
      documento_contratante: '234567890',
      nombre_contratantista: 'Ana Martinez',
      documento_contratantista: '876543210',
      fecha_inicial: '2023-02-01',
      fecha_final: '2023-11-30'
    }
    // Add more contracts as needed
  ];

  selectedContrato: any = null;

  onSelect(contratoId: number) {
    this.selectedContrato = this.contratos.find(c => c.id === +contratoId);
  }
}
