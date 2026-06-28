// Задача 12
// Є функція sendDoneStatus:

type Callback = (s: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((s) => console.log(s));
// Завдання:
// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
