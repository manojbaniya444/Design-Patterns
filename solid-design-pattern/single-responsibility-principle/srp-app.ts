// Responsibilioty 1: User data (entity)

class User {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
}

// Responsibility 2: Validation logic

class UserValidator {
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 8;
  }

  validateUser(user: User): boolean {
    return this.validateEmail(user.email) && this.validatePassword(user.password);
  }
}

// Responsibility 3: Database operations

class UserRepository {
  save(user: User): void {
    console.log(`Saving user ${user.name} to the database`)
  }

  delete(user: User): void {
    console.log(`Deleting the user ${user.name} from the database`)
  }

  findByEmail(email: string): User | null {
    console.log(`Find the user by email ${email}`)
    return null
  }
}

// Responsibility 4: Email Notifications

class EmailService {
  sendWelcomeEmail(user: User): void {
    console.log(`Sending welcom email to ${user.email}`)
  }

  sendPasswordResetMail(user: User): void {
    console.log(`Sending the reset password email to ${user.email}`)
  }
}

// Usuage with coordinating service
class UserService {
  constructor(
    private validator: UserValidator,
    private repository: UserRepository,
    private emailService: EmailService
  ) {}

  registerUser(name: string, email: string, password: string): void {
    const user = new User(name, email, password);

    if (!this.validator.validateUser(user)) {
      throw new Error("Invalid user data")
    }

    this.repository.save(user)
    this.emailService.sendWelcomeEmail(user)
  }
}

// Usuage
const validator = new UserValidator();
const repository = new UserRepository();
const emailService = new EmailService();
const userService = new UserService(validator, repository, emailService)

userService.registerUser("John Marley", "test@example.com", "password123")