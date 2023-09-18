const testModel = require('../TestModel'); 

describe('testModel', () => { //Gera o teste
  it('deve retornar a string correta', () => { //it ou test executa o test
    const resultado = testModel();
    expect(resultado).toBe('A soma de 2+3 é: 5'); // expect Verifica se o resultado é o esperado
  });

  it('deve calcular a soma corretamente', () => {
    const soma = testModel().split(' ')[5]; // Extrai a parte numérica da string
    expect(Number(soma)).toBe(5); // Verifica se a soma é igual a 5
  });
    it('falha proposital', () => {
    const soma = testModel().split(' ')[5]; // Extrai a parte numérica da string
    expect(Number(soma)).toBe(8); // Verifica se a soma é igual a 5
  });
});
