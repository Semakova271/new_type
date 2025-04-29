import Buyable from './Buyable';

export default class Movie {
  // Объявляем свойства класса
  name: string;
  price: number;
  year: number;
  country: string;
  genre: string[];
  rating: number;

  // Конструктор принимает все необходимые параметры
  constructor(
    name: string,
    price: number,
    year: number,
    country: string,
    genre: string[],
    rating: number
  ) {
    this.name = name;      // Название фильма
    this.price = price;    // Цена фильма
    this.year = year;      // Год выпуска
    this.country = country; // Страна производства
    this.genre = genre;    // Жанры фильма
    this.rating = rating;  // Рейтинг фильма
  }

  // Метод display для отображения информации о фильме
  display(): string {
    return `${this.name} (${this.year}, ${this.country}) - Genre: ${this.genre.join(', ')}, Rating: ${this.rating}`;
  }
}

