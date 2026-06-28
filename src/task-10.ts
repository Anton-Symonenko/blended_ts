const users: string[] = ["alice", "bob", "charlie"];

interface ToUserObjectsReturn {
  id: number;
  name: string;
}

function toUserObjects(array: string[]): ToUserObjectsReturn[] {
  return array.map((user, index) => ({
    id: index + 1,
    name: user,
  }));
}

toUserObjects(users);
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
