let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    //recorrente: "Sim",
};
let outro = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
};
//console.log("Bem-vinda, " + info.personagem);
info["recorrente"] = "Sim";

/*for(let index in info){
    console.log(index);
}*/
/*for(let index in info){
    console.log(info[index]);
}
*/
for (let i in info) {
    console.log(info[i] + ' e ' + outro[i]);
}