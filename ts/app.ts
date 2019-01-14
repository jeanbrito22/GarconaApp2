import { GarconappController } from './controllers/GarconappController';

let garconappController = new GarconappController();

jQuery("#icone-camera").on('click', garconappController.scannear.bind(garconappController));

jQuery('#confirmar').on('click', garconappController.adicionarProdutos.bind(garconappController));

jQuery('#cancelar').on('click', function() { garconappController.limparInformacoes(); });

jQuery('a.collection-item').on('click', function() { garconappController.incrementarQuantidade(this);});

jQuery('.modal-trigger').leanModal({in_duration: 100, out_duration: 100});

jQuery('.acao-finalizar').on('click', garconappController.finalizarPedido.bind(garconappController));