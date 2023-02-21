// Find some similar behavior, group to separate class and change it on the fly.
// Create the base class and send the model of behaviour as a parameter.

(function () {
  class User {
    githubToken: string;
    jwtToken: string;
  }

// Interface is a main element
// We don't care about the realization. We just need an interface
  interface AuthStrategy {
    auth(user: User): boolean;
  }

  class Auth {
    constructor(private strategy: AuthStrategy) {
    }

    setStrategy(strategy: AuthStrategy) {
      this.strategy = strategy;
    }

    authUser(user: User): boolean {
      return this.strategy.auth(user);
    }
  }

  class JWTStrategy implements AuthStrategy {
    auth(user: User): boolean {
      return Boolean(user.jwtToken);
    }
  }

  class GHStrategy implements AuthStrategy {
    auth(user: User): boolean {
      return Boolean(user.githubToken);
    }
  }

  const user = new User();
  user.jwtToken = 'jwtToken';

  const jwtStrat = new JWTStrategy();
  const auth = new Auth(jwtStrat);
  console.log("Auth: ", auth.authUser(user));

  auth.setStrategy(new GHStrategy());
  console.log("Auth: ", auth.authUser(user));

})()

