// The main idea is to hide all the complicated realisation behind the simple API

class Notify {
  send(template: string, to: string) {
    console.log(`Send to ${to}: ${template}`);
  }
}

class Log {
  log(message: string) {
    console.log("[Message: ]", message);
  }
}

class Template {
  private templates = [
    { name: 'other', template: '<h1>Template!</h1>' }
  ]

  getByName(name: string) {
    return this.templates.find(({ name }) => name === name)
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Log;
  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.logger = new Log();
    this.template = new Template();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log("Can not find the template");
      return;
    }
    this.notify.send(data.template, to);
    this.logger.log("Template was sent");
  }
}

const s = new NotificationFacade();
s.send("Tommy", "SomeTemplate");
