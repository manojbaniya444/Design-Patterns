interface Logger {
  log(message: string): void;
}

// Adaptee (Third Party Logger)
class ThirdPartyLogger {
  writeLog(logLevel: string, msg: string): void {
    console.log(`[${logLevel.toUpperCase()}] ${Date().toString()} ${msg}`)
  }
}

// Adapter: The adapter that modify our expected interface to the third party
class LoggerAdapter implements Logger {
  constructor(private readonly thirdPartyLogger: ThirdPartyLogger) {}

  // log -> writeLog (in the third party logger)
  log(message: string): void {
    this.thirdPartyLogger.writeLog("info", message)
  }
}

// our custom log
class OurLogger implements Logger {
  log(message: string): void {
    console.log(`Log: ${message}`)
  }
}

// Client
function runApp(logger: Logger) {
  logger.log("Application started")
}

const thirdPartyLogger = new ThirdPartyLogger();
const logger = new LoggerAdapter(thirdPartyLogger)

runApp(logger)

const ourLogger = new OurLogger()

runApp(ourLogger)