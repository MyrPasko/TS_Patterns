interface IInsurance {
  id: number;
  statis: string;

  setVehicle(vehicle: Vehicle): void;

  submit(): Promise<boolean>;
}

interface Vehicle {
  name: string;
  run: number;
}

class TFInsurance implements IInsurance {
  id: number = 1000;
  statis: string;
  private vehicle: Vehicle;

  setVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {

    const res = await fetch('', { method: "POST", body: JSON.stringify({ vehicle: this.vehicle }) });
    const data = await res.json();

    return data.success
  }
}

class ABInsurance implements IInsurance {
  id: number;
  statis: string;
  private vehicle: Vehicle;
  private run: number

  setVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
  }

  private setRun(): void {
    this.run = 1000;
  }

  async submit(): Promise<boolean> {

    const res = await fetch('', { method: "POST", body: JSON.stringify({ vehicle: this.vehicle }) });
    const data = await res.json();

    return data.yes;
  }
}

abstract class InsuranceFactory {
  db: any;

  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    console.log("%c[SAVED in DB: ]", "background: #000; color: #e34011", ins);
    this.db.save();
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new TFInsurance();
  }
}

class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();

console.log("%c[INS: ]", "background: #000; color: #e34011", ins);

// tfInsuranceFactory.saveHistory(ins);

// _________________________ Alternative Realization ______________________________

const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance
}

type InsuranceType = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
  db: any;

  createInsurance<T extends keyof InsuranceType>(type: T): InsuranceType[T] {
    return INSURANCE_TYPE[type];
  }

  saveHistory(ins: IInsurance) {
    console.log("%c[SAVED in DB: ]", "background: #000; color: #e34011", ins);
    this.db.save();
  }
}

const insuranceFactoryAlt = new InsuranceFactoryAlt();
const ins2 = new (insuranceFactoryAlt.createInsurance("tf"));

console.log("[INS2: ]", ins2);
