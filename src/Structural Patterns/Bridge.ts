// The main idea is to send the general interface to main class. We can extend it as we wish.

interface IProvider {
  sendMessage(message: string): void;
  connect(config: string): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  connect(config: string): void {
    console.log("%c[Telegram Config: ]", "background: #000; color: #e34011", config);
  }

  disconnect(): void {
    console.log("%c[Telegram Disconnect]", "background: #000; color: #e34011");
  }

  sendMessage(message: string): void {
    console.log("%c[Telegram Message: ]", "background: #000; color: #e34011", message);
  }
}

class WatsUpProvider implements IProvider {
  connect(config: string): void {
    console.log("%c[WatsUp Config: ]", "background: #000; color: #e34011", config);
  }

  disconnect(): void {
    console.log("%c[WatsUp Disconnect]", "background: #000; color: #e34011");
  }

  sendMessage(message: string): void {
    console.log("%c[WatsUp Message: ]", "background: #000; color: #e34011", message);
  }
}

class NotificationSender {
  constructor(public provider: IProvider) {
  }

  send() {
    this.provider.connect("Connect");
    this.provider.sendMessage("Message");
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(public provider: IProvider) {
    super(provider);
  }

  sendDelayed() {
    console.log("%c[Send delayed]", "background: #000; color: #e34011");
  }
}

const sender1 = new NotificationSender(new TelegramProvider());
sender1.send();

const sender2 = new NotificationSender(new WatsUpProvider());
sender2.send();
const sender3 = new DelayNotificationSender(new TelegramProvider());
sender3.send();
