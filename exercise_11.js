const TIPO_NO = 'no';
const TIPO_FOLHA = 'folha';

class No {

    #valor;
    #direita;
    #esquerda;

    constructor(valor) {
        this.#valor = valor;
    }

    get valor() {
        return this.#valor;
    }

    tipo() {
        return TIPO_NO;
    }

    get direita() {
        return this.#direita;
    }

    set direita(e) {
        this.#direita = e;
    }

    get esquerda() {
        return this.#esquerda;
    }

    set esquerda(e) {
        this.#esquerda = e;
    }
}

class Folha extends No {
    constructor(valor) {
        super(valor);
    }

    tipo() {
        return TIPO_FOLHA;
    }

    get direita() {
        return undefined;
    }

    get esquerda() {
        return undefined;
    }
}

class Arvore {

    #raiz;
    
    constructor(valorRaiz) {
        this.#raiz = new Folha(valorRaiz);
    }

    get raiz() {
        return this.#raiz;
    }

    inserirValor(valor) {
        this.#raiz = this.#inserir(this.#raiz, valor);
    }
    
    #inserir(noAtual, valor) {
        if (noAtual === undefined) {
            return new Folha(valor);
        }

        if (noAtual.tipo() === TIPO_NO) {
            if (valor > noAtual.valor) {
                noAtual.direita = this.#inserir(noAtual.direita, valor);
            } else {
                noAtual.esquerda = this.#inserir(noAtual.esquerda, valor);
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
        this.#print('', this.#raiz, false);
    }

    #print(prefixo, no, ehEsquerdo) {
        if (no !== undefined) {
            console.log(prefixo + (ehEsquerdo ? "|-- " : "\\-- ") + no.valor);
            this.#print(prefixo + (ehEsquerdo ? "|   " : "    "), no.esquerda, true);
            this.#print(prefixo + (ehEsquerdo ? "|   " : "    "), no.direita, false);
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