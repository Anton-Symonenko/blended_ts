interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (i: number) => T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3],
  addItem(item) {
    this.items.push(item);
  },
  getItem(i) {
    return this.items[i];
  },
};

const stringContainer: Container<string> = {
  items: ["1, 2, 3", "Privit", "Buvai"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(i) {
    return this.items[i];
  },
};

numberContainer.addItem(1);
stringContainer.getItem(999);

function getLastElement<T>(array: T[]): T {
  return array[array.length - 1];
}

getLastElement<number>(numberContainer.items);

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2. Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.
