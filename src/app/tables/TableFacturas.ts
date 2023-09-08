export interface TableFacturas {
  id: string;
  codigoFactura: string;
  cliente: string;
  correoElectronico: string;
  ciudad: string;
  desarrollo: string;
  numeroBogota: string;
  nit: string;
  subTotal: number;
  iva: number;
  retencion: string;
  retencionValor: number;
  fechaCreacion: Date;
  pagada: boolean;
  totalFactura:number,
  estado:boolean
  fechaPago:Date;
}
