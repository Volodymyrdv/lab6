import { PackageFactory } from './PackageFactory';
import { Letter } from './Letter';
import { SimplePackaging } from './SimplePackaging';
import { PremiumPackaging } from './PremiumPackaging';

describe('PackageFactory', () => {
  const product = new Letter(1, 'Test Letter', 50);

  it('should create a SimplePackaging', () => {
    const pkg = PackageFactory.createPackage(product, 'Simple');
    expect(pkg).toBeInstanceOf(SimplePackaging);
    expect(pkg.getType()).toBe('Simple');
    expect(pkg.getProduct()).toBe(product);
    expect(pkg.getPrice()).toBe(30);
  });

  it('should create a PremiumPackaging', () => {
    const pkg = PackageFactory.createPackage(product, 'Premium');
    expect(pkg).toBeInstanceOf(PremiumPackaging);
    expect(pkg.getType()).toBe('Premium');
    expect(pkg.getProduct()).toBe(product);
    expect(pkg.getPrice()).toBe(100);
  });

  it('should throw error for unknown packaging type', () => {
    expect(() => {
      PackageFactory.createPackage(product, 'Fancy');
    }).toThrowError('Unknown package type');
  });
});
