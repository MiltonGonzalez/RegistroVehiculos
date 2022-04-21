export class Vehiculo {
_id?: number;
nombre: string;
Placa:string;
marca:string;
color:string;

constructor(nombre:string, Placa:string,marca:string, color:string){
    this.nombre= nombre;
    this.Placa= Placa;
    this.marca= marca;
    this.color= color;
}

}