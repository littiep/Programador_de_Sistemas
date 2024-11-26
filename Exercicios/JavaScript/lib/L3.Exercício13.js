function imprimirTabuada() {
    for (var n = 1; n <= 10; n++) {
            for (var k = 0; k <= 10; k++) {
                    console.log(`${n} x ${k} = ${n*k}`)
                }    
                console.log("\n===============\n")
            }
        }
        imprimirTabuada()
        
        // function tabuada(n){
        //     for(var k=0; k<- 10; k++) {
        //         console.log(` ${n} x ${k} = ${n*k}`)
        //     }
        //     console.log();

        // }
        // function tabuadaCompleta() {
        //     for(var n=1; n<=10; n++) tabuada(n); 
        //  }
        // tabuadaCompleta();