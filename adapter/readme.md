## Adapter Pattern (STRUCTURAL)

Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate

We create an adapter. This is a special object that converts the interface of one object so that another object understand it.

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scene. The wrapped object is not even aware of the adapter.

The adapter acts as an bridge between two incompatible interfaces by wrapping an existing class with a new interface.

### When to use an adapter

- Integrating third party libraries with incompatible interfaces
- Working with legacy code that can not be modified
- Conveting data between different formats
- Making classes with different interfaces work together
- Adapting multiple implementation to a common interface

The adapter follows: `SRP` and `Open Close` SOLID principles.