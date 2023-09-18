function soma(a, b){
return a + b;
}

describe("Teste inicial", ()=>{
test("Primeiro unit test",()=>{
const primeiraProposicao = 7;
const segundaProposicao = 1;

let resultado = soma(primeiraProposicao, segundaProposicao);

expect(resultado).toEqual(primeiraProposicao + segundaProposicao);
})

it("Segunda unit test - com erro proposital",()=>{
const primeiraProposicao = 7;
const segundaProposicao = 1;

let resultado = soma(primeiraProposicao, segundaProposicao);

expect(resultado).toEqual(primeiraProposicao + segundaProposicao + 1);
})
});

//npx jest src/model/teste/exemploTest.spec.js