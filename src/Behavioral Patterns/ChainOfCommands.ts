// Chain of commands - middleware

interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;

  handle(req: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;

  handle(req: any): any {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(req);
    }
    return;
  }

  next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid;
    return mid;
  }
}

class AuthMiddleware extends AbstractMiddleware {
  override handle(req: any): any {
    console.log("[Auth middleware]",);

    if (req.userId === 1) {
      return super.handle(req);
    }

    return { error: "You are not authorized" };
  }
}

class ValidateMiddleware extends AbstractMiddleware {
  override handle(req: any): any {
    console.log("[Validate middleware]",);

    if (req.body) {
      return super.handle(req);
    }

    return { error: "There is no request body." };
  }
}

class Controller extends AbstractMiddleware {
  override handle(req: any): any {
    console.log("[Controller middleware]",);
    return { success: true };
  }
}

const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller); // Activation of the "handle" methods of each class

console.log(auth.handle({userId: 1, body: "It's ok!"}))
