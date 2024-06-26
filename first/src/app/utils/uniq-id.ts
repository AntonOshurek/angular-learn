export function generateRandomString(): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  // Генерация 10 случайных символов
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  // Добавление текущего времени для обеспечения уникальности
  const uniqueTime = new Date().getTime().toString();

  // Уникальная строка состоит из случайных символов и времени
  const uniqueString = result + uniqueTime;

  // Возвращаем первые 10 символов уникальной строки
  return uniqueString.substring(0, 10);
}
