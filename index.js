//Classe Herói Genérica 
class heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
    //Função atacar com console.log de saída direta 
    atacar(){
        let ataque;
        switch (this.tipoHeroi){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
            default:
                ataque = "ataque não conhecido"
        }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
    }
}

//Atribuição de valores as propriedades 
let heroi1 = new heroi("Lucao", 40, "ninja")
let heroi2 = new heroi("Sergio", 60, "guerreiro")
let heroi3 = new heroi("Bruce", 33, "mago")
let heroi4 = new heroi("Tonho", 25, "monge")
let heroi5 = new heroi("Prado", 100, "bruiser")

//Demonstrando resultados para cada heroi com a função atacar
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()