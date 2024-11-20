import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = {
    name: '',
    email: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Formulario enviado', this.user);
  }

  navigateToCrear() {
    this.router.navigate(['/crear']);
  }

  navigateToActualizar() {
    this.router.navigate(['/actualizar']);
  }

}
