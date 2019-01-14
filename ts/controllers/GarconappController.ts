declare var cordova: any;

import { NumeroMesaView } from "../views/NumeroMesaView";
import { ItensMenuView } from "../views/ItensMenuView";
import { ProdutosAdicionadosView } from "../views/ProdutosAdicionadosView";

export class GarconappController {

    private _numeroMesaView = new NumeroMesaView("#numero-mesa");
    private _itensMenuView = new ItensMenuView("a.collection-item");
    private _produtosAdicionadosView: ProdutosAdicionadosView; 

    public scannear(): void {
        cordova.plugins.barcodeScanner.scan(
            (result: phonegapBarcode.BarcodeScanResult) => this._numeroMesaView.update(result.text),
            (error: any) => alert("Falha no escaneamento: " + error)
        )
    }

    public incrementarQuantidade(self: object): void {
        this._itensMenuView.update(self);
    }

    public limparInformacoes(): void {
        this._itensMenuView.limpar();
        this._numeroMesaView.limpar();
        this._produtosAdicionadosView.limpar();
    }

    public adicionarProdutos(): void {
        this._produtosAdicionadosView = new ProdutosAdicionadosView("span.adicionado");
        this._produtosAdicionadosView.update();
    }

    public finalizarPedido(): void {
        alert('pedido finalizado');
    }
 
}