export class Mail {
  private _tipo: string;
  private _direccion: string;

  constructor({ tipo, direccion }: { tipo: string; direccion: string }) {
    this._tipo = tipo;
    this._direccion = direccion;
  }

  public getTipo(): string {
    return this._tipo;
  }

  public setTipo(nuevoTipo: string) {
    this._tipo = nuevoTipo;
  }

  public getDireccion(): string {
    return this._direccion;
  }

  public setDireccion(nuevaDireccion: string) {
    this._direccion = nuevaDireccion;
  }
}
