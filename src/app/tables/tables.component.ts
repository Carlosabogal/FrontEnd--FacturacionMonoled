import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { catchError, tap, throwError } from 'rxjs';
import { TableFacturas } from './TableFacturas';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  facturas: TableFacturas[] = [];
  facturasPaginadas: TableFacturas[] = [];
  paginaActual = 1;
  elementosPorPagina = 5;
  pagada: boolean = false;

  apiUrl = 'https://localhost:7053/api/factura';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFacturas();
  }

  getFacturas(): void {
    const url = `${this.apiUrl}`;
    this.http.get<TableFacturas[]>(url).subscribe(
      (facturas) => {
        this.facturas = facturas;
        this.actualizarFacturasPaginadas();
      },
      (error) => {
        console.error('Error al obtener las facturas:', error);
      }
    );
  }

  actualizarFacturasPaginadas(): void {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    this.facturasPaginadas = this.facturas.slice(inicio, fin);
  }

  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;
    this.actualizarFacturasPaginadas();
  }

  showConfirmationDialog(id: string): void {
    Swal.fire({
      title: 'Selecciona una opción',
      showCancelButton: true,
      confirmButtonText: 'Enviar Notificaciones',
      denyButtonText: 'Realizar Pago',
      cancelButtonText: 'Cancelar',
      customClass: {
        cancelButton: 'cancel-button',
      },
      showCloseButton: true,
      showDenyButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Confirmado');
        this.actualizarFactura(id, false);
      } else if (result.isDenied) {
        this.actualizarFactura(id, true);
      } else {
        console.log('Operación cancelada');
      }
    });
  }

  actualizarFactura(id: string, pagada: boolean): void {
    const url = `${this.apiUrl}/${id}?pago=${pagada}`;
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http
      .put(url, {}, requestOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('Factura actualizada con éxito.');
            this.showSuccessMessage('La factura se ha actualizado correctamente.');
            this.getFacturas();
          } else {
            console.error('Error al actualizar la factura:', error);
            this.showErrorMessage('No se pudo actualizar la factura.');
            this.getFacturas();
          }
          return throwError(error);
        })
      )
      .subscribe(
        () => {
          console.log('Success handling code goes here.');
          this.getFacturas(); // Llama a getFacturas después de la actualización
        }
      );
  }

  showSuccessMessage(message: string) {
    Swal.fire('¡Éxito!', message, 'success');
  }

  showErrorMessage(message: string) {
    Swal.fire('¡Error!', message, 'error');
  }

  deleteFacturaById(id: string): void {
    const url = `${this.apiUrl}/${id}`;
    this.http.delete(url).subscribe(
      () => {
        console.log('Factura eliminada con éxito');
        this.getFacturas(); // Llama a getFacturas después de la eliminación
      },
      (error: any) => {
        console.error('Error al eliminar la factura:', error);
      }
    );
  }
  recargarPagina(): void {
    window.location.reload();
  }

calcularPaginaMaxima(): number {
  return Math.ceil(this.facturas.length / this.elementosPorPagina);
}

}
