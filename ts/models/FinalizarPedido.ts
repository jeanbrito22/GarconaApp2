import { PedidoService } from "./PedidoService";

export class FinalizarPedido{

    constructor(private _url: string){}

    public finalizar(dataPedido: PedidoService): void {
        jQuery.ajax({
            url: this._url,
            data: dataPedido,
            success: (resposta) => {
                Materialize.toast(resposta, 2000);
                jQuery('#numero-mesa').val("");
                navigator.vibrate(3000);
                jQuery("#cancelar").click();
            },
            error: (erro) => {
                Materialize.toast(erro.responseText, 3000, 'red-text');
            }
        })
    }

}