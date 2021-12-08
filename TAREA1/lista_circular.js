class nodo {
    constructor(dato) {
        this.dato = dato
        this.sig = null
        this.ant = null
    }
}

class Lista_Circular {
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    insertar(dato) {
        let nuevo = new nodo(dato)

        if (this.inicio == null) {
            nuevo.sig = nuevo
            nuevo.ant = nuevo
            this.inicio = nuevo
            this.final = nuevo
        } else {
            let aux = this.inicio
            if (this.inicio == this.final) {
                this.inicio.sig = nuevo
                this.inicio.ant = nuevo
                nuevo.ant = this.inicio
                nuevo.sig = this.inicio
                this.final = nuevo
            } else {

                while (aux != this.final) {
                    if (aux.sig == this.final) {
                        nuevo.ant = this.final
                        nuevo.sig = this.inicio
                        this.final.sig = nuevo
                        this.final = nuevo
                        break
                    }
                    aux = aux.sig
                }
            }
        }
    }

    mostrar() {
        let aux = this.inicio
        console.log("***** Impresion de lista circular ******")
        if (this.inicio == this.final) {
            console.log("->" + aux.dato + " ->" + aux.sig.dato)
        } else {
            while (aux != this.final) {
                console.log("->" + aux.dato + " ->" + aux.sig.dato)
                if (aux.sig == this.final) {
                    console.log("->" + aux.sig.dato + " ->" + aux.sig.sig.dato)
                }

                aux = aux.sig
            }
        }
    }
}

let lista = new Lista_Circular()
lista.insertar(10)
lista.mostrar()
lista.insertar(20)
lista.mostrar()
lista.insertar(30)
lista.mostrar()
lista.insertar(40)
lista.mostrar()
lista.insertar(50)
lista.mostrar()