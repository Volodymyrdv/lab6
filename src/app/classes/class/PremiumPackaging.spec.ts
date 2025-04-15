import { Letter } from './Letter';
import { PremiumPackaging } from './PremiumPackaging';

describe('PremiumPackaging', () => {
  const letter = new Letter(1, 'Лист', 25);

  it('should return type and price', () => {
    const premium = new PremiumPackaging(letter);
    expect(premium.getType()).toBe('Premium');
    expect(premium.getPrice()).toBe(100);
    expect(premium.getProduct()).toBe(letter);
  });
});
