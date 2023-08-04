const student = [{
    nome: "João", 
    nota1: 7,
    nota2: 9 
}, 
{
    nome: "Melissa", 
    nota1: 5,
    nota2: 8 
},
{
    nome: "Vander", 
    nota1: 5,
    nota2: 10 
},
{
    nome: "Jean", 
    nota1: 6,
    nota2: 9 
}]


function media() {
    let i=0
    let result
    while(student[i]!=null){
        result = (student[i].nota1 + student[i].nota2) / 2
        result = result.toFixed(2)
        let mensage
        if (result>7) {
            mensage = `A média do(a) aluno(a) ${student[i].nome} é: ${result}
            Parabéns, ${student[i].nome}! Você foi aprovado(a) no concurso!`
        } else {
            mensage = `A média do(a) aluno(a) ${student[i].nome} é: ${result}
            Não foi dessa vez, ${student[i].nome}! Tente Novamente!`
        }
        i++
        alert(mensage) 
    }
}

media()