"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(_a) {
        var calle = _a.calle, numero = _a.numero, piso = _a.piso, letra = _a.letra, codigoPostal = _a.codigoPostal, poblacion = _a.poblacion, provincia = _a.provincia;
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Direccion.prototype.getCalle = function () {
        return this._calle;
    };
    Direccion.prototype.setCalle = function (nuevaCalle) {
        this._calle = nuevaCalle;
    };
    Direccion.prototype.getNumero = function () {
        return this._numero;
    };
    Direccion.prototype.setNumero = function (nuevoNumero) {
        this._numero = nuevoNumero;
    };
    Direccion.prototype.getPiso = function () {
        return this._piso;
    };
    Direccion.prototype.setPiso = function (nuevoPiso) {
        this._piso = nuevoPiso;
    };
    Direccion.prototype.getLetra = function () {
        return this._letra;
    };
    Direccion.prototype.setLetra = function (nuevaLetra) {
        this._letra = nuevaLetra;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this._codigoPostal;
    };
    Direccion.prototype.setCodigoPostal = function (nuevoCodigoPostal) {
        this._codigoPostal = nuevoCodigoPostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this._poblacion;
    };
    Direccion.prototype.setPoblacion = function (nuevaPoblacion) {
        this._poblacion = nuevaPoblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this._provincia;
    };
    Direccion.prototype.setProvincia = function (nuevaProvincia) {
        this._provincia = nuevaProvincia;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
