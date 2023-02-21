// Change the functionality of the classes without changing their source code.

abstract class AutoForVisitor {
  accept(visitor: (auto: AutoType) => void) {
    visitor(this)
  }

  abstract info(): string;

}

type AutoType = Tesla | BMV | Audi;

class Tesla extends AutoForVisitor {
  info() {
    return 'It is Tesla'
  }
}

class BMV extends AutoForVisitor {
  info() {
    return 'It is BMV'
  }
}

class Audi extends AutoForVisitor {
  info() {
    return 'It is Audi'
  }
}

function exportVisitor(auto: AutoType) {
  if (auto instanceof Tesla) {
      console.log(`Exported data: ${auto.info()}`);
  }
  if (auto instanceof BMV) {
      console.log(`Exported data: ${auto.info()}`);
  }
  if (auto instanceof Audi) {
    console.log(`Exported data: ${auto.info()}`);
  }
}

const tesla = new Tesla();
const bmv = new BMV();
const audi = new Audi();

tesla.accept(exportVisitor);
bmv.accept(exportVisitor);
audi.accept(exportVisitor);
