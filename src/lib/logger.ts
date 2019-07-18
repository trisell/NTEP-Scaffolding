import * as winston from 'winston';
import { Logger } from 'winston';
import config from '../config';

const template = (log: any) =>
`${log.timestamp} - [${log.level}]: ${log.stack || log.message}`;

const logger: Logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.printf((log) => template(log)),
  ),
  level: config.logging.logLevel,
  transports: [
      new winston.transports.Console({ level: 'info' }),
      new winston.transports.File({ filename: config.logging.file.logFile }),
  ],
});

export default logger;
