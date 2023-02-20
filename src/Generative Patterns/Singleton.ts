class MyMap {
  private static instance: MyMap;
  map: Map<number, string> = new Map<number, string>();

  private constructor() {
  }

  clean() {
    this.map = new Map<number, string>();
  }

  public static get(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }
    return MyMap.instance;
  }
}

class Service1 {
  addKeys(key: number, value: string) {
    MyMap.get().map.set(key, value);
  }
}

class Service2 {
  getKeys(key: number) {
    const myMap = MyMap.get();
    console.log("[Value 1: ]", myMap.map.get(key));
    myMap.clean();
    console.log("[Value 1: ]", myMap.map.get(key));
  }
}

const service1 = new Service1();
service1.addKeys(1, "It works.")

const service2 = new Service2();

service2.getKeys(1);
