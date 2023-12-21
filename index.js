let nome = "Javier"; 
let experiencia = 9999; 

if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia <= 5000) {
    nivel = "Prata";
} else {
    switch (true) {
        case (experiencia <= 7000):
            nivel = "Ouro";
            break;
        case (experiencia <= 8000):
            nivel = "Platina";
            break;
        case (experiencia <= 9000):
            nivel = "Ascendente";
            break;
        case (experiencia <= 10000):
            nivel = "Imortal";
            break;
        default:
            nivel = "Radiante";
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);