export class Pedido
{
    constructor(private _pid:number,private _pedido:string,private _monto:number)
    {

    }
    get pid(){return this._pid} 
    get pedido(){return this._pedido} 
    get monto(){return this._monto} 

    set pid(pid){this._pid=pid;}
    set pedido(pedido){this._pedido=pedido;}
    set monto(monto){this._monto=monto;}
}