// When we want to add a layer of the logic to the existing class

interface IPaymentAPI {
  getPaymentDetail(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
  id: number;
  sum: number;
}

// Base class
class PaymentAPI implements IPaymentAPI {
  private data = [{id: 1, sum: 1000}]

  getPaymentDetail(id: number): IPaymentDetail | undefined {
    return this.data.find(payment => payment.id === id);
  }
}

// Proxy also implements the base-class interface and expands it with additional logic
class PaymentAccessProxy implements IPaymentAPI {
  constructor(private api: PaymentAPI, private userId: number) {
  }

  getPaymentDetail(id: number): IPaymentDetail | undefined {
    if (this.userId === 1) {
        return this.api.getPaymentDetail(id); // call the base-class methods wrapped in the additional logic.
    }
    console.error('[You cannot get access!]');
  }
}

const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1));

const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(1));
