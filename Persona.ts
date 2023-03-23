import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _DNI: string;
  private _cumpleaños: string;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Array<Direccion>;
  private _mails: Array<Mail>;
  private _telefonos: Array<Telefono>;
  private _notas: Array<string>;

  constructor({
    nombre,
    apellidos,
    edad,
    DNI,
    cumpleaños,
    colorFavorito,
    sexo,
    direcciones,
    mails,
    telefonos,
    notas,
  }: {
    nombre: string;
    apellidos: string;
    edad: number;
    DNI: string;
    cumpleaños: string;
    colorFavorito: string;
    sexo: string;
    direcciones: Array<Direccion>;
    mails: Array<Mail>;
    telefonos: Array<Telefono>;
    notas: Array<string>;
  }) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._DNI = DNI;
    this._cumpleaños = cumpleaños;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  public getNombre(): string {
    return this._nombre;
  }

  public setNombre(nuevoNombre: string) {
    this._nombre = nuevoNombre;
  }

  public getApellidos(): string {
    return this._apellidos;
  }

  public setApellidos(nuevosApellidos: string) {
    this._apellidos = nuevosApellidos;
  }

  public getEdad(): number {
    return this._edad;
  }

  public setEdad(nuevaEdad: number) {
    this._edad = nuevaEdad;
  }

  public getDNI(): string {
    return this._DNI;
  }

  public setDNI(nuevoDNI: string) {
    this._DNI = nuevoDNI;
  }

  public getCumpleaños(): string {
    return this._cumpleaños;
  }

  public setCumpleaños(nuevoCumpleaños: string) {
    this._cumpleaños = nuevoCumpleaños;
  }

  public getColorFavorito(): string {
    return this._colorFavorito;
  }

  public setColorFavorito(nuevoColorFavorito: string) {
    this._colorFavorito = nuevoColorFavorito;
  }

  public getSexo(): string {
    return this._sexo;
  }

  public setSexo(nuevoSexo: string) {
    this._sexo = nuevoSexo;
  }

  public getDirecciones(): Array<Direccion> {
    return this._direcciones;
  }

  public setDirecciones(nuevasDirecciones: Array<Direccion>) {
    this._direcciones = nuevasDirecciones;
  }

  public getMails(): Array<Mail> {
    return this._mails;
  }

  public setMails(nuevosMails: Array<Mail>) {
    this._mails = nuevosMails;
  }

  public getTelefonos(): Array<Telefono> {
    return this._telefonos;
  }

  public setTelefonos(nuevosTelefonos: Array<Telefono>) {
    this._telefonos = nuevosTelefonos;
  }

  public getNotas(): Array<string> {
    return this._notas;
  }

  public setNotas(nuevasNotas: Array<string>) {
    this._notas = nuevasNotas;
  }

  public addDireccion(direccionAAñadir: Direccion) {
    this._direcciones.push(direccionAAñadir);
  }

  public addMail(mailAAñadir: Mail) {
    this._mails.push(mailAAñadir);
  }

  public addTelefono(telefonoAAñadir: Telefono) {
    this._telefonos.push(telefonoAAñadir);
  }

  public addNota(notaAAñadir: string) {
    this._notas.push(notaAAñadir);
  }
}
