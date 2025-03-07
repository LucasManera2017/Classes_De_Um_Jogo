class heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
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

let heroi1 = new heroi("Lucao", 40, "ninja")
let heroi2 = new heroi("Sergio", 60, "guerreiro")
let heroi3 = new heroi("Bruce", 33, "mago")
let heroi4 = new heroi("Tonho", 25, "monge")
let heroi5 = new heroi("Prado", 100, "bruiser")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()