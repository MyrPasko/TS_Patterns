import 'reflect-metadata';

// class User {
//   skills: string[] = [];
//
//   addSkills(skills: string): void;
//
//   addSkills(skills: string[]): void;
//
//   addSkills(skills: string | string[]): void {
//     if (Array.isArray(skills)) {
//       this.skills = [...this.skills, ...skills];
//     } else {
//       this.skills = [...this.skills, skills];
//     }
//   }
// }
//
// const user = new User();
//
// user.addSkills(["some skill", "another skill"]);
// console.log("%c[Skills multiple: ]", "background: #000; color: #e34011", user.skills);
// user.addSkills("third skill");
// console.log("%c[Skills single: ]", "background: #000; color: #e34011", user.skills);
// user.addSkills("this is bullshit");
//
// interface ILogger {
//   log(...args: any[]): void;
//
//   error(...args: any[]): void;
// }
//
// interface IAnotherLogger {
//   log(logs: string[]): void;
//
//   delete(id: string): void;
// }
//
// class Payment {
//   price: number = 10;
//   updatedAt: Date;
//   createdAt: Date;
//   id: number;
//   sum: number = 0;
//
//   constructor(id: number) {
//     this.id = id;
//     this.createdAt = new Date();
//     this.updatedAt = new Date();
//   }
//
//   setUpdatedAt(): void {
//     this.updatedAt = new Date();
//   }
//
//   pay(number: number): void {
//     this.sum = number * this.price;
//     this.setUpdatedAt();
//   }
// }
//
// class HumanPayment extends Payment {
//   constructor(id: number) {
//     super(id);
//   }
//
//   override pay(number?: number, price?: number): void {
//     if (number && price) {
//       super.pay(number);
//       this.sum = number * price;
//     }
//   }
// }
//
// const payment = new Payment(1);
// payment.pay(10);
// console.log("[Payment: ]", payment.sum, payment.createdAt, payment.updatedAt);
//
// const humanPayment = new HumanPayment(2);
// humanPayment.pay(10, 11);
// console.log("[Payment: ]", humanPayment.sum, humanPayment.createdAt, humanPayment.updatedAt);

// class Product {
//   constructor(
//     public id: number,
//     public name: string,
//     public price: number) {
//   }
// }
//
// // class Delivery {
// //   storeId: number | null = null;
// //   date: Date = new Date();
// //   address: string | null = null;
// //
// //   constructor(date: Date, storeId: number);
// //
// //   constructor(date: Date, address: string);
// //
// //   constructor(date?: Date, addressOrStoreId?: string | number) {
// //     if (addressOrStoreId) {
// //       if (typeof addressOrStoreId === 'string') {
// //         this.address = addressOrStoreId;
// //       } else {
// //         this.storeId = addressOrStoreId;
// //       }
// //     }
// //     if (date) {
// //       this.date = date;
// //     }
// //   }
// // }
//
// class Delivery {
//   constructor(public date: Date) {
//   }
// }
//
// class HomeDelivery extends Delivery {
//   constructor(public date: Date, public address: string) {
//     super(date);
//   }
// }
//
// class AddressDelivery extends Delivery {
//   constructor(public storeId: number) {
//     super(new Date());
//   }
// }
//
// type DeliveryOptions = HomeDelivery | AddressDelivery | null;
//
// class Cart {
//   private products: Product[] = [];
//   private delivery: DeliveryOptions = null;
//
//   addProduct (product: Product) {
//     this.products.push(product);
//   }
//
//   deleteProduct(product: Product) {
//     this.products = this.products.filter((prod) => prod.id !== product.id);
//   }
//
//   setDelivery(delivery: DeliveryOptions) {
//     this.delivery = delivery;
//   }
//
//   calculatePayment() {
//     return this.products.reduce((acc, prod) => acc + prod.price, 0)
//   }
//
//   checkout() {
//     if (this.products.length && this.delivery) {
//       console.log("[Everything is ok!!!]");
//     }
//   }
// }
//
// const redBull = new Product(1, "RedBull", 40);
// const bigRedBull = new Product(2, "BigRedBull", 60);
//
// const deliveryToStore = new AddressDelivery(10);
// const deliveryToHome = new HomeDelivery(new Date(), "Poltava");
//
// const cart = new Cart();
// cart.addProduct(redBull);
// cart.addProduct(bigRedBull);
//
// // console.log("%c[Cart products: ]", "background: #000; color: #e34011", cart.products);
// console.log("%c[Full price: ]", "background: #000; color: #e34011", cart.calculatePayment());
//
// cart.deleteProduct(redBull);
//
// // console.log("%c[Cart products: ]", "background: #000; color: #e34011", cart.products);
// console.log("%c[Full price: ]", "background: #000; color: #e34011", cart.calculatePayment());
//
// cart.checkout();
// cart.setDelivery(deliveryToStore);
//
// cart.checkout();
//
// abstract class Logger {
//   abstract log(message: string): void;
//
//   printDate(date: Date) {
//     this.log(date.toISOString());
//   }
// }
//
// class RealLogger extends Logger{
//   log(message: string): void {
//     console.log(message);
//   }
//
//   logWithDate(message: string) {
//     this.printDate(new Date());
//     this.log(message);
//   }
// }
//
// const realLogger = new RealLogger();
//
// realLogger.logWithDate("Some message to log.");

// type WithIdType = { id: number };
//
// const data = [
//   { id: 4, name: "Wee" },
//   { id: 1, name: "Tommy" },
//   { id: 3, name: "Jacky" },
//   { id: 2, name: "Cash" },
// ];
//
//
// enum SortTypes {
//   ASC = "ascending",
//   DESC = "descending"
// }
//
// function sortById<T extends WithIdType>(data: T[], sortType: SortTypes): T[] {
//   const dataCopy = [...data];
//
//   return dataCopy.sort((a, b) => {
//     switch (sortType) {
//       case SortTypes.ASC:
//         return a.id - b.id;
//       case SortTypes.DESC:
//         return b.id - a.id;
//     }
//   })
// }
//
// console.log("%c[Asc: ]", "background: #000; color: #e34011", sortById(data, SortTypes.ASC));
// console.log("%c[Desc: ]", "background: #000; color: #e34011", sortById(data, SortTypes.DESC));

// interface IUser {
//   name: string;
//   age: number;
//   isMan: boolean;
// }
//
// type KeysOfUser = keyof IUser;
//
// function getValue(obj: IUser, key: KeysOfUser) {
//   console.log("[Key: ]", obj[key]);
// }
//
// const user: IUser = {
//   age: 30,
//   isMan: true,
//   name: 'Mike'
// }
//
// getValue(user, 'name');
//
// interface Data {
//   group: number,
//   name: string,
// }
//
// const data: Data[] = [
//   {group: 1, name: 'a'},
//   {group: 1, name: 'b'},
//   {group: 2, name: 'c'},
//   {group: 1, name: 'd'},
//   {group: 3, name: 'e'},
//   {group: 3, name: 'f'},
// ]
//
// function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<keyof T, T[]> {
//   return arr.reduce<Record<keyof T, T[]>>((acc, elem) => {
//     const newKey = String(elem[key]);
//
//     if (acc[newKey]) {
//       acc[newKey] = [...acc[newKey], elem];
//     } else {
//       acc[newKey] = [elem];
//     }
//
//     // acc[newKey] = {...acc[newKey], elem};
//
//     return acc;
//   }, {});
//
//   // for (let elem of arr) {
//   //   const newKey = String(elem[key]);
//   //
//   //   if (result.hasOwnProperty(newKey)) {
//   //     result[newKey] = [...result[newKey], elem];
//   //   }
//   // }
//   //
//   // return result;
// }
//
// const result = groupBy(data, 'group');

// const str = "str";
// let str2 = "str";
//
// const anotherStr: typeof str = "strv"

// type Verbs = 'get' | 'post' | 'put' | 'patch';
//
// type httpVerbs = `http${Capitalize<Verbs>}`;
//
// type returnVerbs<T> = T extends `http${ infer K}` ? K : never;
//
// type User = {
//   id: number,
//   name: string,
//   age: number,
//   address: string;
// }
//
// type User1 = Omit<User, "id">;
//
// function getData(id: number, name: string) {
//   const user = {
//     id,
//     name
//   };
//
//   return user;
// }
//
// type RT = ReturnType<typeof getData>;
// type PT = Parameters<typeof getData>;
//
// const user2: RT = { id: 0, name: "Name" }

// interface IUserService {
//   users: number;
//   getUsersInDatabase(): number;
// }
//
// type CreatedAt = {
//   createdAt: Date;
// }
//
// type UserServiceCP = ConstructorParameters<typeof UserService>;
//
// // @NullUsers
// @AddCreatedAt
// @Log("Log users")
// @AdvancedNullUsersFabric(20)
// class UserService implements IUserService {
//   users: number = 1000;
//
//   // @MethodDecorator
//   @Catch(false)
//   getUsersInDatabase(): number {
//     // throw new Error("Error")
//     return 10;
//   }
//
// }
//
// function NullUsers(target: Function) {
//   target.prototype.users = 0;
// }
//
// function NullUsersFabric(users: number) {
//   return (target: Function) => {
//     target.prototype.users = users;
//   }
// }
//
// function Log(message: string) {
//   console.log("[LOG Init]");
//   return (target: Function) => {
//     console.log("[LOG: ]", message);
//   }
// }
//
// function AdvancedNullUsers<T extends { new(...args: any[]): {}}>(constructor: T) {
//   return class extends constructor {
//     users = 0;
//   }
// }
//
// function AdvancedNullUsersFabric(users: number) {
//   console.log("[Advanced null users init]");
//   return <T extends { new(...args: any[]): {} }>(constructor: T) => {
//     console.log("[ADVANCED NULL USERS]");
//
//     return class extends constructor {
//       users = users;
//     }
//   }
// }
//
// function AddCreatedAt<T extends {new(...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     createdAt = new Date();
//   }
// }
//
// // ???????, ?? ????? ???????, ??? ????, ?????? ??? ??????? ??????? ?????? ??? ?? ??????????
// console.log("%c[NullUsers: ]", "background: #000; color: #e34011", (new UserService() as IUserService & CreatedAt).createdAt);
//
// function Catch(rethrow: boolean = false) {
//   return (
//     target: Object,
//     _: string | symbol,
//     descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
//   ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//     const oldValue = descriptor.value;
//
//     descriptor.value = (...args: any[]) => {
//       try {
//         return oldValue?.apply(target, args);
//       } catch (e) {
//         if (e instanceof Error) {
//           console.log(e.message);
//
//           if (rethrow) {
//             throw e;
//           }
//         }
//       }
//     }
//   }
// }
//
// class MaxValue {
//   @Max(100)
//   value: number = 0
// }
//
// function Max(max: number) {
//   return (target: Object, propertyKey: string | symbol) => {
//     let value: number;
//
//     const getter = () => {
//       return value;
//     }
//
//     const setter = (val: number) => {
//       if (val > max) {
//         console.log(`[Error, can not be more than ${max}]`);
//       } else {
//         value = val;
//       }
//     }
//
//     console.log("[Metadata: ]", Reflect.getOwnMetadata("design:type", target, propertyKey));
//
//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter
//     })
//   }
// }
//
// const maxValue = new MaxValue();
//
// maxValue.value = 200;




















