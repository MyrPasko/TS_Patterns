// The main idea is orchestration of the different classes, call orders and so on.
// Decrease the connectivity between classes and moving  out to the abstract class the shared logic

interface Mediator {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator: Mediator;

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log("[Sent notification!]");
  }
}

// We can extend any class with Mediated to get access to mediator and trigger some actions
class Logg extends Mediated {
  log(message: string) {
    console.log("[Log Message from class: ]", message);

    if (this.mediator) {
      this.mediator.notify('Logger', 'log');
    }
  }
}

// We can extend any class with Mediated to get access to mediator and trigger some actions
class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify('EventHandler', 'myEvent')
  }
}

class NotificationMediator implements Mediator {
  constructor(public notifications: Notifications, public logger: Logg, public eventHandler: EventHandler) {
  }

  notify(sender: string, event: string): void {
    switch (event) {
      case 'myEvent':
        this.notifications.send();
        this.logger.log("Send!");
        break;
      case 'log':
        this.notifications.send();
        // this.logger.log("Log from notify");
        // this.eventHandler.myEvent();
        break;
    }
  }
}

const handler = new EventHandler();
const logger = new Logg();
const notifications = new Notifications();

const m = new NotificationMediator(notifications, logger, handler);

handler.setMediator(m);
handler.myEvent();
logger.setMediator(m);
logger.log("From out")



