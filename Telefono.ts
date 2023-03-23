export class Telefono {
  private _tipo: string;
  private _numero: number;

  constructor({ tipo, numero }: { tipo: string; numero: number }) {
    this._tipo = tipo;
    this._numero = numero;
  }

  public getTipo(): string {
    return this._tipo;
  }

  public setTipo(nuevoTipo: string) {
    this._tipo = nuevoTipo;
  }

  public getNumero(): number {
    return this._numero;
  }

  public setNumero(nuevoNumero: number) {
    this._numero = nuevoNumero;
  }
}
