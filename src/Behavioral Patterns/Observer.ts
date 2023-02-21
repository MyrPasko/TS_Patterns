// One class can observe the state changes in another class and be notified about that via subscription.

interface Observer {
  // We call it when something was changed
  update(subject: Subject): void;
}

// Someone who emit event, and we can subscribe to this event
interface Subject {
  attach(observer: Observer): void;

  detach(observer: Observer): void;

  notify(): void;
}

class Lead {
  constructor(public name: string, public phone: string) {
  }
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return;
    }

    this.observers.push(observer)
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      return;
    }

    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    for (let observer of this.observers) {
      observer.update(this)
    }
  }
}

class NotificationService implements Observer {
  update(subject: Subject): void {
    console.log('Notification service received notice.');
    console.log(subject);
  }
}

class LeadService implements Observer {
  update(subject: Subject): void {
    console.log('Lead service received notice.');
    console.log(subject);
  }
}

const subject = new NewLead();
subject.state = new Lead('Anton', '00000');
const s1 = new NotificationService();
const s2 = new LeadService();

subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
