// import { ProductFactory } from './ProductFactory';

// describe('ProductFactory', () => {
//   it('should create GiftSet', () => {
//     const product = ProductFactory.createProduct({
//       type: 'GiftSet',
//       id: 1,
//       name: 'Подарунок',
//       price: 100,
//       itemCount: 2,
//       weight: 1.0,
//     });
//     expect(product.getType()).toBe('GiftSet');
//   });

//   it('should create Letter', () => {
//     const product = ProductFactory.createProduct({
//       type: 'Letter',
//       id: 2,
//       name: 'Лист',
//       price: 20,
//     });
//     expect(product.getType()).toBe('Letter');
//   });

//   it('should create Souvenir', () => {
//     const product = ProductFactory.createProduct({
//       type: 'Souvenir',
//       id: 3,
//       name: 'Сувенір',
//       price: 150,
//       material: 'Скло',
//     });
//     expect(product.getType()).toBe('Souvenir');
//   });

//   it('should throw error on unknown type', () => {
//     expect(() =>
//       ProductFactory.createProduct({
//         type: 'jjejfejfs',
//         id: 3,
//         name: 'Сувенір',
//         price: 150,
//         material: 'Скло',
//       })
//     ).toThrowError('Unknown product type');
//   });
// });
