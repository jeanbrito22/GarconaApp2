declare var cordova: any;

import { NumeroMesaView, ItensMenuView, ProdutosAdicionadosView } from "../views/index";
import { FinalizarPedido } from "../models/FinalizarPedido";

export class GarconappController {

    private _numeroMesaView = new NumeroMesaView("#numero-mesa");
    private _itensMenuView = new ItensMenuView("a.collection-item");
    private _produtosAdicionadosView: ProdutosAdicionadosView;
    private _finalizarPedido = new FinalizarPedido("http://cozinhapp.sergiolopes.org/novo-pedido");

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
        this._finalizarPedido.finalizar({
            mesa: jQuery('#numero-mesa').val(),
            pedido: jQuery('.produtos-adicionados').text().replace(/\s\s+/g, '\n').trim()
        });
    }
}