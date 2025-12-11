1. Single Responsibility Principle
   The Single Responsibility Principle states that a class should have only one reason to change meaning it should have only one job or responsibility.

Benefits:

- Each class has a single, well defined responsibility
- Easy to test each component independently
- Better maintainability and scalability
- Easier to reuse components in differnet contexts

---

2. Open Close Principle
   The Open/Closed Principle states that software entities should be open for extension but closed for modification- meaning we should be able to add new functionality without changing the existing code

---

3. Liskov Substitution Principle
   The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of a subclass without breaking the application. In simpler terms: if class B is a subtype of class A, you should be able to use B anywhere you use A without causing problems.

---

4. Interface Segregation Principle
   The Interface Segregation Principle states that no client should be forced to depend on methods it does not use. In other words, it's better to have many small, specific interfaces than one large, general-purpose interface.

---

5. Dependency Inversion Principle
   DIP inverts the traditional dependency structure where high-level modules depend on low-level modules. Instead, both depend on abstractions.
