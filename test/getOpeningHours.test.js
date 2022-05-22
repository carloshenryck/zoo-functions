const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se nenhum parâmetro for passado, retorna o objeto hours', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(hours);
  });

  it('para os argumentos abaixo, deve retornar The zoo is closed', () => {
    expect(getOpeningHours('Monday', '9:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '9:00-PM')).toBe('The zoo is closed');
  });

  it('para os argumentos Tuesday e 9:00-AM deve retornar The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '9:00-AM')).toBe('The zoo is open');
  });

  describe('casos onde exceções são lançadas', () => {
    it('exceção The day must be valid. Example: Monday', () => {
      expect(() => { getOpeningHours('Thu', '9:00-AM'); }).toThrow('The day must be valid. Example: Monday');
    });

    it('exceção The abbreviation must be \'AM\' or \'PM\'', () => {
      expect(() => { getOpeningHours('Friday', '9:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    });

    it('exceção The hour should represent a number', () => {
      expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
    });

    it('exceção The minutes should represent a number', () => {
      expect(() => { getOpeningHours('Saturday', '09:D0-AM'); }).toThrow('The minutes should represent a number');
    });

    it('exceção The hour must be between 0 and 12', () => {
      expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
    });

    it('exceção The minutes must be between 0 and 59', () => {
      expect(() => { getOpeningHours('Tuesday', '9:60-AM'); }).toThrow('The minutes must be between 0 and 59');
    });
  });
});
