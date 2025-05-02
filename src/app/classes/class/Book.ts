import { Product } from './Product';

export class Book extends Product {
  private author: string;
  private pages: number;
  constructor(
    id: string,
    name: string,
    price: number,
    author: string,
    pages: number
  ) {
    super(id, name, price);
    this.author = author;
    this.pages = pages;
  }

  getAuthor(): string {
    return this.author;
  }
  getPages(): number {
    return this.pages;
  }
  override getType(): string {
    return 'Book';
  }
  override getDetails(): string[] {
    let details = [];
    details.push('Автор: ' + this.author);
    details.push('Кількість сторінок: ' + this.pages);
    return details;
  }
}
