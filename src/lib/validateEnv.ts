import {
  cleanEnv, host, num, port, str,
} from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    LOG_LEVEL: str(),
    PORT: port(),
    POSTGRES_DB: str(),
    POSTGRES_HOST: host(),
    POSTGRES_PASSWORD: str(),
    POSTGRES_PORT: num(),
    POSTGRES_USER: str(),
  });
}
export default validateEnv;
