interface IController {
  save(): void;
}

interface IRepository {
  save(): void;
}

interface IService {
  save(): void;
}

class ControllerDI implements IController {
  service: IService

  constructor (service: IService) {
    this.service = service;
  }

  save() {
    this.service.save();
  }
}

class ServiceDI implements IService {
  repo: IRepository

  constructor (repo: IRepository) {
    this.repo = repo;
  }

  save() {
    this.repo.save();
  }
}

class RepositoryDI implements IRepository {
  save() {
    console.log("Saving the user")
  }
}

const repositoryDI = new RepositoryDI()
const serviceDI = new ServiceDI(repositoryDI)
const controllerDI = new ControllerDI(serviceDI)

controllerDI.save()

// mock test
class MockRepositoryDI implements IRepository {
  // we are forced to use save if we want the mock repo in service
  save() {
    console.log("Mock data test")
  }
}

const mockRepositoryDI = new MockRepositoryDI()
const mockServiceDI = new ServiceDI(mockRepositoryDI) // perfectly the mock test
const mockControllerDI = new ControllerDI(mockServiceDI)

mockControllerDI.save()