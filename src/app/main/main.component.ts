import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Factura } from './Factura';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  nuevaFactura: Factura = {
    id: '',
    codigoFactura: '',
    cliente: '',
    correoElectronico: '',
    ciudad: '',
    desarrollo: '',
    numeroBogota: '',
    nit: '',
    subTotal: 0,
    iva: 0,
    retencion: '',
    retencionValor: 0,
    fechaCreacion: new Date(),
    pagada: false
  };

  constructor(private http: HttpClient) {}

  crearFactura() {
    const url = 'https://localhost:7053/api/factura'; // URL de tu API
    this.http.post(url, this.nuevaFactura).subscribe(
      (response: any) => {
        console.log('Factura creada exitosamente:', response);
        // Reiniciar el formulario después de crear la factura
        this.resetFormulario();
      },
      (error: any) => {
        console.error('Error al crear la factura:', error);
      }
    );
  }

actualizarFactura(id: string, pagada: boolean) {
  const url = `https://localhost:7053/api/factura/${id}`; // URL for updating factura
  this.http.put(url, pagada).subscribe(
    (response: any) => {
      console.log('Factura actualizada con éxito:', response);
      // You can handle success here, e.g., show a success message
      Swal.fire(
        '¡Éxito!',
        'La factura se ha actualizado correctamente.',
        'success'
      );
    },
    (error: any) => {
      console.error('Error al actualizar la factura:', error);
      // You can handle errors here, e.g., show an error message
      Swal.fire(
        'Error',
        'No se pudo actualizar la factura.',
        'error'
      );
    }
  );
}
  resetFormulario() {
    // Reiniciar los valores del formulario
    this.nuevaFactura = {
      id: '',
      codigoFactura: '',
      cliente: '',
      correoElectronico: '',
      ciudad: '',
      desarrollo: '',
      numeroBogota: '',
      nit: '',
      subTotal: 0,
      iva: 0,
      retencion: '',
      retencionValor: 0,
      fechaCreacion: new Date(),
      pagada: false
    };
  }

  resetForm() {
    this.resetFormulario();
  }

  showModal(){
    Swal.fire(
      '¡Felicidades!',
      'Su evento fue agendado con éxito.',
      'success'
    )
  }
}
