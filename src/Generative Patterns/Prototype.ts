// This is an ability to clone the existing object.
interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;

  constructor(public name: string, public age: number) {
    this.createdAt = new Date();
  }

  clone(): UserHistory {
    const target = new UserHistory(this.name, this.age);
    target.createdAt = this.createdAt;

    return target;
  }
}

const userHistory = new UserHistory("Tommy", 30);
console.log("%c[User history original: ]", "background: #000; color: #e34011", userHistory);

const cloneUserHistory = userHistory.clone();
console.log("%c[User history clone: ]", "background: #000; color: #e34011", cloneUserHistory);

