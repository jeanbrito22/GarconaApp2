import { View } from "./View";

export class ProdutosAdicionadosView extends View {

    update(): void {
        jQuery('.produtos-adicionados').html("");
        this._elemento.parent().each(function(i) {
            jQuery('.produtos-adicionados').append(`<p>${jQuery(this).text().replace(/\s+$/,"")}.</p>`);
        });   
    }

    limpar(): void {
        jQuery('.produtos-adicionados').html("");
    }

}