// Notification system (There will be different notification) but we create an instance with the class

// define an interface that other notification should implement
interface INotification {
  send(): void;
}

// Email Notification Implementation
class EmailNotification implements INotification {
  send() {
    console.log("Sending the notification using the email");
  }
}

// Mobile Notification Implementation
class PushNotification implements INotification {
  send() {
    console.log("Sending the notification using the push notification");
  }
}

// Notification factory to create a new instance of the notification
class NotificationFactory {
  static CreateNotification(type: string): INotification {
    switch (type) {
      case "email":
        return new EmailNotification();

      default:
        throw new Error("Incorrect notification type implementation.");
    }
  }
}

const notification = NotificationFactory.CreateNotification("email");
notification.send();
