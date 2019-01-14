import { View } from "./View";

export class NumeroMesaView extends View{

    update(numero: string): void {
        this._elemento.val(numero);
    }

    limpar(): void {
        this._elemento.val("");
    }

}