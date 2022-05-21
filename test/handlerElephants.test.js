const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna 4 ao passar o argumento count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('retorna uma array com os nomes, ao passar o argumento names', () => {
    const names = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(names);
  });

  it('retorna a média da idade ao passar o argumento averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('retorna null ao passar um argumento que não refere a nenhuma ação', () => {
    expect(handlerElephants('açãoInexistente')).toBeNull();
  });

  it('retona undefined caso não seja passado nenhum argumento', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('retorna uma mensagem ao passar um argumento que não é uma string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('retorna um valor do objeto caso o parâmetro seja uma key do objeto', () => {
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
