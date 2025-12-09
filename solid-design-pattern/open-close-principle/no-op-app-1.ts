class PaymentProcessor {
  processPayment(amount: number, type: string): void {
    if (type === "Khalti") {
      console.log(`Processing the payment using the khalti wallet`);
    } else if (type === "Esewa") {
      console.log(`Processing the payement using Esewa`);
    } else if (type === "ImePay") {
      console.log(`Processing the payment using the ImePay`);
    } else {
      throw new Error(
        "Unsupported payment type. Please use Khalti, Esewa or ImePay"
      );
    }
  }
}

const processor = new PaymentProcessor();
processor.processPayment(100, "Khalti");
processor.processPayment(200, "Esewa");
processor.processPayment(300, "ImePay");

// Problems:
// 1. Every time we add a new payment method we must modify the `PaymentProcessor` class
// 2. Risk of breaking existing functionality when adding new features
// 3. Violates the principle of being 'closed for modification'