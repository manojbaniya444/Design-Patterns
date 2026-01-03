// single instance database

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionString: string;

  private constructor() {
    this.connectionString = "url://testhost:1234/test-db";
    console.log("Database connnection created")
  }

  // static method to get the sinvle instance of the database
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection()
    }
    return DatabaseConnection.instance;
  }

  public executeQuery(sql: string) {
    console.log("Executing the query", sql)
  }

  public getConnectionString(): string {
    return this.connectionString;
  }
}

const databaseClient1 = DatabaseConnection.getInstance();
const databaseClient2 = DatabaseConnection.getInstance();

console.log("Are both the database client single instance", databaseClient1 === databaseClient2)