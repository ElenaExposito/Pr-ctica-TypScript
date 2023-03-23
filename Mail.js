"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(_a) {
        var tipo = _a.tipo, direccion = _a.direccion;
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Mail.prototype.getTipo = function () {
        return this._tipo;
    };
    Mail.prototype.setTipo = function (nuevoTipo) {
        this._tipo = nuevoTipo;
    };
    Mail.prototype.getDireccion = function () {
        return this._direccion;
    };
    Mail.prototype.setDireccion = function (nuevaDireccion) {
        this._direccion = nuevaDireccion;
    };
    return Mail;
}());
exports.Mail = Mail;
