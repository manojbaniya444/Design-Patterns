// Refactoring the no-op-app-1.ts using the Open-Close Principle

// interface that all payment methods must implement
interface PaymentMethod {
  process(amount: number): void;
}

// Each Payment method is a seperate class implementing the interface
class KhaltiPayment implements PaymentMethod {
  process(amount: number): void {
    console.log(`Processing the ${amount} using the khalti`)
  }
}

class EsewaPayment implements PaymentMethod {
  process(amount: number): void {
    console.log(`Processing the amount ${amount} using the Esewa`)
  }
}

class ImePayPayment implements PaymentMethod {
  process(amount: number): void {
    console.log(`Processing the amount ${amount} using the ImePay`)
  }
}

class PaymentProcessorOP {
  processPayment(amount: number, paymentMethod: PaymentMethod): void {
    paymentMethod.process(amount)
  }
}

// Usuage
const processorOP = new PaymentProcessorOP();

const khaltiPay = new KhaltiPayment();

processorOP.processPayment(100, khaltiPay)

// Adding the new Payment method does not require modifying the existing code
class PayPalPayment implements PaymentMethod {
  process(amount: number): void {
    console.log(`Processing the amount using the paypal payment`)
  }
}

const payPalPay = new PayPalPayment()
processorOP.processPayment(1000, payPalPay)