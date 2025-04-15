import { Letter } from './Letter';
import { SimplePackaging } from './SimplePackaging';

describe('SimplePackaging', () => {
  const letter = new Letter(1, 'Лист', 25);

  it('should return type and price', () => {
    const simple = new SimplePackaging(letter);
    expect(simple.getType()).toBe('Simple');
    expect(simple.getPrice()).toBe(30);
    expect(simple.getProduct()).toBe(letter);
  });
});
