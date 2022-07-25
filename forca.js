class Forca {
  letrasChutadas = new Array(); 
  vidas = 6; //regra 1
  palavra = new Array(); 
  letraSeparada = new Array();
  estadoAtual = "aguardando chute"; //regra 2 
  tentativasAcertadas = 0;

  constructor(palavraScreta){
    this.letraSeparada = palavraScreta.split("");
    this.palavra = this.letraSeparada.map(function(){
        return "_";
    }); 
  }

  chutar(letra) {
    //regra 3 e 4
    if(letra.length > 1 || this.letrasChutadas.includes(letra)){
      return '';
    }

    this.letrasChutadas.push(letra); //regra 5

    let acertou = false;
    for(let i = 0; i < this.letraSeparada.length; i++){
        if(this.letraSeparada[i] == letra){
            this.palavra[i] = letra; // regra 7
            acertou = true;
            this.tentativasAcertadas++;
        }
    }

    if(!this.letraSeparada.includes(letra)){ //regra 6
      this.vidas--; 
    }
  
    this.mudaEstado();
  }

  mudaEstado(){
    if(this.vidas <= 0){
      this.estadoAtual = "perdeu"; //regra 8
    }
    else if(this.tentativasAcertadas == this.letraSeparada.length){
        this.estadoAtual = "ganhou"; //regra 9
  }
  }
  
  buscarEstado() {
    return this.estadoAtual; // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  } 

  buscarDadosDoJogo() {

      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
