    var carro1 = {
        marca: "subaru",
        modelo: "brz",
        ano : 2015,
        cor: "azul",
        traçao: "4x4",
        aro: 18,
        motor:"2.2 v4",
        combustão:"gasolina",
        carroceria: "simples",
        cambio:"6 marcha",
        potencia:300 ,
        chassi: "547af4g3",
        calibragem: {
            dianteiro:20,
            traseiro:32,
            step:36,
        },
        velocidade:0,
        velocidadeMaxima:220,
        classe: "esportivo",
        localDeFabricaçao:"massachussets",
    }
    var carro2 = {
        marca: "porsche",
        modelo: "911 carrera",
        velocidade: 0,
    }

    // function p(car) {
        
        function acelerar(car) {
            car.velocidade += 5
    }

    function frear(car) {
        car.velocidade -= 13
        if (car.velocidade < 0 )  car.velocidade = 0
    }


    while(carro2.velocidade < 80) {
        acelerar(carro2)
    }
    while (carro2.velocidade > 60) {
        frear(carro2)
    }
    while (carro2.velocidade > 0) {
        frear(carro2)
    }
    // }



    // while (carro2.velocidade < 0 ) {
    //     carro2.velocidade + 1
    // }



    // console.table(p(carro1))
    // console.table(p(carro2))
