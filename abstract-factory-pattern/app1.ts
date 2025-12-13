// Defining interface we use together for that

interface INotification1 {
  send(recipient: string, message: string): void;
}

interface INotificationTemplate {
  getTemplate(): string;
  hasRichContent(): boolean;
}

// Basic Email Notification (FREE Tier)
class BasicEmailNotification implements INotification1 {
  send(recipient: string, message: string): void {
    console.log(`[EMAIL] to ${recipient} using free tier: ${message}`);
  }
}

class BasicTemplate implements INotificationTemplate {
  getTemplate(): string {
    return "Plain text template";
  }

  hasRichContent(): boolean {
    return false;
  }
}

// Premium Email Notification (PREMIUM Tier)
class PremiumEmailNotification implements INotification1 {
  send(recipient: string, message: string): void {
    console.log(
      `[EMAIL] to ${recipient} using the Premium content: message ${message}`
    );
  }
}

class PremiumTemplate implements INotificationTemplate {
  getTemplate(): string {
    return "Rich data template with images and animation style content";
  }

  hasRichContent(): boolean {
    return true;
  }
}

class PremiumSMSNotification implements INotification1 {
  send(recipient: string, message: string): void {
    console.log(`[PREMIUM]: SMS to the recipient ${recipient}`);
  }
}

// Abstract Factory Interface

interface NotificationFactory {
  createEmailNotification(): INotification1;
  createSMSNotification(): INotification1 | null;
  createTemplate(): INotificationTemplate;
}

// Concrete Factories for each tier
class FreeUserFactory implements NotificationFactory {
  createEmailNotification(): INotification1 {
    return new BasicEmailNotification();
  }

  createSMSNotification(): INotification1 | null {
    // not for the free
    return null;
  }

  createTemplate(): INotificationTemplate {
    return new BasicTemplate();
  }
}

class PremiumUserFactory implements NotificationFactory {
  createEmailNotification(): INotification1 {
    return new PremiumEmailNotification();
  }

  createSMSNotification(): INotification1 {
    return new PremiumSMSNotification();
  }

  createTemplate(): INotificationTemplate {
    return new PremiumTemplate();
  }
}

// Factory data service to use provider getting the required class in that
class NotificationFactoryProvider {
  static getFactory(userTier: string): NotificationFactory {
    switch (userTier.toLowerCase()) {
      case "free":
        return new FreeUserFactory();

      case "premium":
        return new PremiumUserFactory();

      default:
        throw new Error(
          `Unknown user tier: ${userTier} available free and premium`
        );
    }
  }
}

// client code
class NotificationService {
  private factory: NotificationFactory;

  constructor(userTier: string) {
    this.factory = NotificationFactoryProvider.getFactory(userTier);
  }

  sendWelcomeEmail(email: string) {
    const notification = this.factory.createEmailNotification();
    const template = this.factory.createTemplate();

    console.log(`Using the template: ${template}`);
    notification.send(email, "Welcome");
  }

  sendUrgentAlert(phone: string, message: string) {
    const sms = this.factory.createSMSNotification();
    if (sms) {
      sms.send(phone, message);
    }
  }
}

const freeService = new NotificationService("free");
freeService.sendWelcomeEmail("testuser@example.com");
