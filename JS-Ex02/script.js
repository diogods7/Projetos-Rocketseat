let student = []
let joao = new student [{
    nome: "João", 
    nota1: 7,
    nota2: 9 
}]

function media() {
    let i = 0;
    let result;
    while(student[i]=null){
        result = (student[i].nota1 + student[i].nota2) / 2
        if (result>7) {
            return ""
        } 
    }
}

alert(media)