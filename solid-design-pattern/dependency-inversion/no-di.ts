class Controller {
  userService: Service;

  constructor(service: Service) {
    this.userService = service;
  }

  save() {
    this.userService.save();
  }
}

class Service {
  userRepository: Repository;

  constructor(repo: Repository) {
    this.userRepository = repo;
  }

  save() {
    this.userRepository.save();
  }
}

class Repository {
  save() {
    console.log("Saving the user in the database");
  }
}

const repo = new Repository()
const service = new Service(repo)
const controller = new Controller(service)

// If we want the MockRepo
class MockRepository {
  saveUser() {
    console.log("Saving the user in the mock database")
  }
}

// const mockService = new Service(new MockRepository()) // Do not allow because the repo in service is Repository