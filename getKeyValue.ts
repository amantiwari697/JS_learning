interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];
function getKeyValues<T, K extends keyof T>(arr: T[], key: K): T[K][] {
    return arr.map(item => item[key]);
}

// Usage
const names = getKeyValues(users, "name");
const emails = getKeyValues(users, "email");

console.log("Names:", names); // Output: Names: [ 'Alice', 'Bob', 'Charlie' ]
console.log("Emails:", emails); // Output: Emails: [ 'alice@example.com', 'bob@example.com', 'charlie@example.com' ]
