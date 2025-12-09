// Example of a service without SRP

class UserT {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  // Responsibility 1: User data validation
  validateEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  validatePassword(): boolean {
    return this.password.length >= 8;
  }

  // Responsibility 2: Database Operations
  saveToDatabase(): void {
    console.log(`Saving the user ${this.name} to the database`);
  }

  deleteFromDatabase(): void {
    console.log(`Deleting the user ${this.name} from the database user table`);
  }

  // Responsibility 3: Sending Emails
  sendWelcomeEmail(): void {
    console.log(`Sending the welcome email to ${this.email}`);
  }

  sendPasswordResetEmail(): void {
    console.log(`Sending password reset email to ${this.email}`);
  }
}

// Usuage
const user = new UserT("John Marley", "example@example.com", "password123");
user.validateEmail();
user.saveToDatabase();
user.sendWelcomeEmail();
