export class Direccion {
  private _calle: string;
  private _numero: number;
  private _piso: number;
  private _letra: string;
  private _codigoPostal: number;
  private _poblacion: string;
  private _provincia: string;

  constructor({
    calle,
    numero,
    piso,
    letra,
    codigoPostal,
    poblacion,
    provincia,
  }: {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;
  }) {
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._codigoPostal = codigoPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  public getCalle(): string {
    return this._calle;
  }

  public setCalle(nuevaCalle: string) {
    this._calle = nuevaCalle;
  }

  public getNumero(): number {
    return this._numero;
  }

  public setNumero(nuevoNumero: number) {
    this._numero = nuevoNumero;
  }

  public getPiso(): number {
    return this._piso;
  }

  public setPiso(nuevoPiso: number) {
    this._piso = nuevoPiso;
  }

  public getLetra(): string {
    return this._letra;
  }

  public setLetra(nuevaLetra: string) {
    this._letra = nuevaLetra;
  }

  public getCodigoPostal(): number {
    return this._codigoPostal;
  }

  public setCodigoPostal(nuevoCodigoPostal: number) {
    this._codigoPostal = nuevoCodigoPostal;
  }

  public getPoblacion(): string {
    return this._poblacion;
  }

  public setPoblacion(nuevaPoblacion: string) {
    this._poblacion = nuevaPoblacion;
  }

  public getProvincia(): string {
    return this._provincia;
  }

  public setProvincia(nuevaProvincia: string) {
    this._provincia = nuevaProvincia;
  }
}
