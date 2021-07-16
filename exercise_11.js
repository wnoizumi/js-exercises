const TIPO_NO = 'no';
const TIPO_FOLHA = 'folha';

class No {
    constructor(valor) {
        this._valor = valor;
        this._tipo = TIPO_NO;
    }

    get valor() {
        return this._valor;
    }

    get tipo() {
        return this._tipo;
    }

    get direita() {
        return this._direita;
    }

    set direita(e) {
        this._direita = e;
    }

    get esquerda() {
        return this._esquerda;
    }

    set esquerda(e) {
        this._esquerda = e;
    }
}

class Folha extends No {
    constructor(valor) {
        super(valor);
        this._tipo = TIPO_FOLHA;
    }

    get direita() {
        return undefined;
    }

    get esquerda() {
        return undefined;
    }
}

class Arvore {

    constructor(valorRaiz) {
        this._raiz = new Folha(valorRaiz);
    }

    get raiz() {
        return this._raiz;
    }

    inserirValor(valor) {
        this._raiz = this._inserir(this._raiz, valor);
    }
    
    _inserir(noAtual, valor) {
        if (noAtual === undefined) {
            return new Folha(valor);
        }

        if (noAtual.tipo === TIPO_NO) {
            if (valor > noAtual.valor) {
                noAtual.direita = this._inserir(noAtual.direita, valor);
            } else {
                noAtual.esquerda = this._inserir(noAtual.esquerda, valor);
            }
        } else {
            let novaFolha = new Folha(valor);
            noAtual = new No(noAtual.valor);
            if (valor > noAtual.valor) {
                noAtual.direita = novaFolha;
            } else {
                noAtual.esquerda = novaFolha;
            }
        }
        return noAtual;
    }

    print() {
        this._print('', this._raiz, false);
    }

    _print(prefixo, no, ehEsquerdo) {
        if (no !== undefined) {
            console.log(prefixo + (ehEsquerdo ? "|-- " : "\\-- ") + no.valor);
            this._print(prefixo + (ehEsquerdo ? "|   " : "    "), no.esquerda, true);
            this._print(prefixo + (ehEsquerdo ? "|   " : "    "), no.direita, false);
        }
    }
}

let arvore = new Arvore(10);
arvore.inserirValor(5);
arvore.inserirValor(15);
arvore.inserirValor(1);
arvore.inserirValor(6);
arvore.inserirValor(100);
arvore.inserirValor(20);
arvore.inserirValor(3);
arvore.inserirValor(8);
arvore.inserirValor(120);
arvore.print();