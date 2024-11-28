var carro1 = {
    marca: "subaru",
    modelo: "brz",
    ano: 2015,
    cor: "azul",
    traçao: "4x4",
    aro: 18,
    motor: "2.2 v4",
    combustão: "gasolina",
    carroceria: "simples",
    cambio: "6 marcha",
    potencia: 300,
    chassi: "547af4g3",
    calibragem: {
        dianteiro: 20,
        traseiro: 32,
        step: 36,
    },
    velocidade: 0,
    acelerar: function () {
        this.velocidade += 5
    },
    frear: function () {
        this.velocidade -= 13
        if (this.velocidade < 0) this.velocidade = 0
    },
    imprimir: function () { console.table(this) },
    velocidadeMaxima: 220,
    classe: "esportivo",
    localDeFabricaçao: "massachussets",
}
var porsche = {
    marca: "porsche",
    modelo: "911 carrera",
    velocidade: 0,
    acelerar: function () {
        this.velocidade += 5
    },
    frear: function () {
        this.velocidade -= 13
        if (this.velocidade < 0) this.velocidade = 0
    },
}

while (carro1.velocidade < 80) carro1.acelerar()


// while(porsche.velocidade < 80)  porsche.acelerar()

// while (porsche.velocidade > 60) porsche.frear()

// while (porsche.velocidade > 0)  porsche.frear()



// console.table(p(carro1))
// console.table(p(carro2))
console.table(carro1)


