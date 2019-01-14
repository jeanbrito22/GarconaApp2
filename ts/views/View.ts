export abstract class View{

    protected _elemento: JQuery;

    constructor(seletor: string){
        this._elemento = jQuery(seletor);
    }

    abstract limpar(): void;

}