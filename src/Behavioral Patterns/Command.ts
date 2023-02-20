// CQRS approach. Do not call service, but some "Command" layer with additional logic.
// Also redux.

class User {
  constructor(public userId: number) {
  }
}

class CommandHistory {
  public commands: Command[] = [];

  push(command: Command) {
    this.commands.push(command);
  }

  remove(command: Command) {
    this.commands = this.commands.filter((comm) => comm.commandId !== command.commandId)
  }
}

abstract class Command {
  // Not required, just for implementation of History
  public commandId: number;

  abstract execute(): void;  // required method !!!!!!

  protected constructor(public history: CommandHistory) {
    this.commandId = Math.random();
  }
}

// Hiding the intermediate logic
class AddUserCommand extends Command {
  constructor(private user: User, private receiver: UserService, history: CommandHistory) {
    super(history);
  }

  execute(): void {
    console.log("[THIS]", this);
    this.receiver.saveUser(this.user);
    this.history.push(this);
  }

  undo(): void {
    console.log("%c[THIS histrory: ]", "background: #000; color: #e34011", this.history);
    this.receiver.deleteUser(this.user);
    this.history.remove(this);
  }
}

// _________________________________________________

class UserService {
  saveUser(user: User) {
    console.log("[Saving user with id: ]", user.userId);
  }

  deleteUser(user: User) {
    console.log("[Deleting user with id: ]", user.userId);
  }
}

//__________________________________________________

class Controller {
  receiver: UserService;
  history: CommandHistory = new CommandHistory();

  addReceiver(receiver: UserService) {
    this.receiver = receiver;
  }

  run() {
    const addUserCommand = new AddUserCommand(
      new User(1),
      this.receiver,
      this.history
    )

    addUserCommand.execute();
    console.log("%c[Add user command, execute: ]", "background: #000; color: #e34011", addUserCommand.history);
    addUserCommand.undo();
    console.log("%c[Add user command, execute: ]", "background: #000; color: #e34011", addUserCommand.history);

  }
}

const control = new Controller();
control.addReceiver(new UserService());
control.run();
