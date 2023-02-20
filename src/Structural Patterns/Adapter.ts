// The main idea is to override the methods of the adapted class using different functionality from another class

class KVDatabase {
  private db: Map<string, string> = new Map();

  save(key: string, value: string) {
    this.db.set(key, value);
  }
}

class PersistentDB {
  savePersistent(data: Object) {
    console.log("[Data: ]", data);
  }
}

function run(base: KVDatabase) {
  base.save('key', 'value')
}

// Adapter. It should extend the adapted class
class PersistentKVAdapter extends KVDatabase {
  constructor(public database: PersistentDB) {
    super();
  }

  override save(key: string, value: string): void {
    this.database.savePersistent({ key, value });
  }
}

run(new PersistentKVAdapter(new PersistentDB()));
