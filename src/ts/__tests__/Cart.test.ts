import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const cart = new Cart();

// Описываем тестовый набор для класса Movie
describe('Movie class', () => {
  // Тест 1: Проверка создания экземпляра класса Movie
  it('should create a Movie instance', () => {
    const movie = new Movie('Avengers', 500, 2012, 'USA', ['action', 'fantasy'], 8.1);

    // Проверяем, что movie - это экземпляр класса Movie
    expect(movie).toBeInstanceOf(Movie);
  });

  // Тест 2: Проверка свойств экземпляра класса Movie
  it('should have correct properties', () => {
    const movie = new Movie('Avengers', 500, 2012, 'USA', ['action', 'fantasy'], 8.1);

    // Проверяем значения свойств объекта
    expect(movie.name).toBe('Avengers'); // Предполагаем, что Buyable имеет свойство name
    expect(movie.price).toBe(500); // Предполагаем, что Buyable имеет свойство price
    expect(movie.year).toBe(2012);
    expect(movie.country).toBe('USA');
    expect(movie.genre).toEqual(['action', 'fantasy']);
    expect(movie.rating).toBe(8.1);
  });

  // Тест 3: Проверка метода display
  it('should display movie information correctly', () => {
    const movie = new Movie('Avengers', 500, 2012, 'USA', ['action', 'fantasy'], 8.1);
    const expectedDisplay = 'Avengers (2012, USA) - Genre: action, fantasy, Rating: 8.1'; // Предполагаем, что Buyable имеет метод display()

    // Проверяем, что метод display возвращает ожидаемую строку
    expect(movie.display()).toBe(expectedDisplay);
  });
});