import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
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
    // Add more contracts as needed
  ];

  selectedContrato: any = null;

  onSelect(contratoId: number) {
    this.selectedContrato = this.contratos.find(c => c.id === +contratoId);
  }

  eliminarContrato() {
    if (this.selectedContrato) {
      this.contratos = this.contratos.filter(c => c.id !== this.selectedContrato.id);
      this.selectedContrato = null;
      alert('Contrato eliminado');
    }
  }
}
