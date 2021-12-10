class nodo_numero {
    constructor(num) {
        this.num = num
        this.sig = null
    }
}

class lista_num {
    constructor() {
        this.inicio = null
        this.final = null
    }

    inserta(num) {
        let nuevo = new nodo_numero(num)

        if (this.inicio == null) {
            this.inicio = nuevo
        } else {
            this.final.sig = nuevo
        }
        this.final = nuevo
    }

    mostrar_num() {
        let aux = this.inicio
        while (aux != null) {
            console.log("\t ->" + aux.num)
            aux = aux.sig
        }
    }
}


class nodo_nombre {
    constructor(name) {
        this.name = name
        this.nums = new lista_num()
        this.sig = null
    }
}

class lista_lista {
    constructor() {
        this.inicio = null
        this.final = null
    }
    agregar_nombre(name) {
        let nuevo = new nodo_nombre(name)

        if (this.inicio == null) {
            this.inicio = nuevo
        } else {
            this.final.sig = nuevo
        }
        this.final = nuevo
    }

    buscar_nombre(nombre) {
        let aux = this.inicio
        while (aux != null) {
            if (aux.name == nombre) {
                return aux
            }
            aux = aux.sig
        }
        return null
    }

    agregar_num(nombre, num) {
        let tmp = this.buscar_nombre(nombre)

        if (tmp != null) {
            tmp.nums.inserta(num)
        }
    }

    mostrar() {
        let aux = this.inicio
        while (aux != null) {
            console.log(aux.name)
            aux.nums.mostrar_num()
            aux = aux.sig
        }
    }
}

let ls = new lista_lista()

ls.agregar_nombre("Fabian")
ls.agregar_nombre("Estuardo")
ls.agregar_nombre("Javier")

ls.agregar_num("Fabian", 1)
ls.agregar_num("Fabian", 2)
ls.agregar_num("Fabian", 3)

ls.agregar_num("Estuardo", 4)
ls.agregar_num("Estuardo", 5)
ls.agregar_num("Estuardo", 6)

ls.agregar_num("Javier", 7)
ls.agregar_num("Javier", 8)
ls.agregar_num("Javier", 9)
ls.mostrar()