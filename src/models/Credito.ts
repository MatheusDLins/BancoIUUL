export class Credito{
    private _valor: number;
    private _data: Date;

    constructor(valor: number, data: Date) {
        this._valor = valor;
        this._data = data;
    }
    
    public get valor(): number {
        return this._valor;
    }

    public set valor(valor: number){
        this._valor = valor;
    }

    public get data(): Date {
        return this._data;
    }

    public set data(data: Date) {
        this._data = data;
    }
    
}