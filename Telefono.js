"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(_a) {
        var tipo = _a.tipo, numero = _a.numero;
        this._tipo = tipo;
        this._numero = numero;
    }
    Telefono.prototype.getTipo = function () {
        return this._tipo;
    };
    Telefono.prototype.setTipo = function (nuevoTipo) {
        this._tipo = nuevoTipo;
    };
    Telefono.prototype.getNumero = function () {
        return this._numero;
    };
    Telefono.prototype.setNumero = function (nuevoNumero) {
        this._numero = nuevoNumero;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
