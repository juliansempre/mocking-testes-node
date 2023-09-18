const assert = require('chai').assert;
const supertest = require('supertest');
const app = require('../../../index');
const request = supertest(app);

describe('Teste de Integração', function () {
  it('Deve retornar a mensagem "Seja bem vindo ao App" na rota /', function (done) {
    request.get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert.equal(res.text, 'Seja bem vindo ao App');
        done();
      });
  });

  it('Deve retornar a mensagem correta na rota /teste', function (done) {
    request.get('/teste')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        // Verifique se a resposta corresponde à saída esperada do TestModel
        assert.include(res.text, 'A soma de 2+3 é: 5');
        done();
      });
  });
  it('Deve retornar um erro proposital /teste', function (done) {
    request.get('/teste')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        // Verifique se a resposta corresponde à saída esperada do TestModel
        assert.include(res.text, 'A soma de 2+3 é: 7');
        done();
      });
  });
});
