interface Logging {
  logLevel: string;
  file: LoggingFile;
}

interface LoggingFile {
  logFile: string;
}
interface DBConnection {
  database: string;
  host: string;
  password: string;
  port: number;
  schema: string;
  user: string;
}

interface Configuration {
  logging: Logging;
  port: number;
  postgres: DBConnection;
}

const config: Configuration = {
  logging: {
    file: {
      logFile: './logs/app.log',
    },
    logLevel: 'debug',
  },
  port: 4000,
  postgres: {
    database: 'application',
    host: 'pg',
    password: 'admin',
    port: 5432,
    schema: 'application',
    user: 'Admin',
  },
};

export default config;
