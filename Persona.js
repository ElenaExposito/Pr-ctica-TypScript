"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(_a) {
        var nombre = _a.nombre, apellidos = _a.apellidos, edad = _a.edad, DNI = _a.DNI, cumpleaños = _a.cumpleaños, colorFavorito = _a.colorFavorito, sexo = _a.sexo, direcciones = _a.direcciones, mails = _a.mails, telefonos = _a.telefonos, notas = _a.notas;
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
    Persona.prototype.getNombre = function () {
        return this._nombre;
    };
    Persona.prototype.setNombre = function (nuevoNombre) {
        this._nombre = nuevoNombre;
    };
    Persona.prototype.getApellidos = function () {
        return this._apellidos;
    };
    Persona.prototype.setApellidos = function (nuevosApellidos) {
        this._apellidos = nuevosApellidos;
    };
    Persona.prototype.getEdad = function () {
        return this._edad;
    };
    Persona.prototype.setEdad = function (nuevaEdad) {
        this._edad = nuevaEdad;
    };
    Persona.prototype.getDNI = function () {
        return this._DNI;
    };
    Persona.prototype.setDNI = function (nuevoDNI) {
        this._DNI = nuevoDNI;
    };
    Persona.prototype.getCumpleaños = function () {
        return this._cumpleaños;
    };
    Persona.prototype.setCumpleaños = function (nuevoCumpleaños) {
        this._cumpleaños = nuevoCumpleaños;
    };
    Persona.prototype.getColorFavorito = function () {
        return this._colorFavorito;
    };
    Persona.prototype.setColorFavorito = function (nuevoColorFavorito) {
        this._colorFavorito = nuevoColorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this._sexo;
    };
    Persona.prototype.setSexo = function (nuevoSexo) {
        this._sexo = nuevoSexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this._direcciones;
    };
    Persona.prototype.setDirecciones = function (nuevasDirecciones) {
        this._direcciones = nuevasDirecciones;
    };
    Persona.prototype.getMails = function () {
        return this._mails;
    };
    Persona.prototype.setMails = function (nuevosMails) {
        this._mails = nuevosMails;
    };
    Persona.prototype.getTelefonos = function () {
        return this._telefonos;
    };
    Persona.prototype.setTelefonos = function (nuevosTelefonos) {
        this._telefonos = nuevosTelefonos;
    };
    Persona.prototype.getNotas = function () {
        return this._notas;
    };
    Persona.prototype.setNotas = function (nuevasNotas) {
        this._notas = nuevasNotas;
    };
    Persona.prototype.addDireccion = function (direccionAAñadir) {
        this._direcciones.push(direccionAAñadir);
    };
    Persona.prototype.addMail = function (mailAAñadir) {
        this._mails.push(mailAAñadir);
    };
    Persona.prototype.addTelefono = function (telefonoAAñadir) {
        this._telefonos.push(telefonoAAñadir);
    };
    Persona.prototype.addNota = function (notaAAñadir) {
        this._notas.push(notaAAñadir);
    };
    return Persona;
}());
exports.Persona = Persona;
