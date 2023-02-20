// When we have a set of steps with different realizations, we can move these steps to template
class Form{
  constructor(public name: string) {
  }
}

type FIO = { fio: string };

abstract class SaveForm<T> {
  // Area of "SaveForm" responsibility
  public save(form: Form) {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }

  protected abstract fill(form: Form): T;

  // Area of "SaveForm" responsibility
  protected log(data: T): void {
    console.log("[LOG: ]", data);
  }

  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string>{
  // Area of "SaveForm" responsibility
  protected fill(form: Form): string {
    return form.name;
  }

  // Area of "SaveForm" responsibility
  protected send(data: string): void {
    console.log("[The data was sent.]", );
  }
}

class SecondAPI extends SaveForm<FIO>{
  // Area of "SaveForm" responsibility
  protected fill(form: Form): FIO {
    return {fio: form.name};
  }

  // Area of "SaveForm" responsibility
  protected send(data: FIO): void {
    console.log("[The data was sent.]", );
  }
}

const form1 = new FirstAPI();
form1.save(new Form("Vasya"));

const form2 = new SecondAPI();
form2.save(new Form("Tommy"));
