import { View } from "./View";

export class ItensMenuView  extends View{


    update(self: object):void {    
        var quantidade= jQuery(self).children().eq(0);
        
        if (!quantidade.text()){
            quantidade.text('0');
            quantidade.addClass('adicionado');
        }
        
        quantidade.text((parseInt(quantidade.text(), 10) + 1).toString() + 'x');
    }

    limpar(): void {
        jQuery('.adicionado').removeClass('adicionado');
        jQuery(this._elemento).children().html('');
    }

}