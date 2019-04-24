import { Pool } from 'pg';
import config from '../config';
import logger from '../lib/logger';

class Postgres {
  private pool: Pool;
  constructor() {
    try {
      this.pool = new Pool (config.postgres);
    } catch (err) {
      logger.error(err);
    }
  }

  public query(query: string, args: string[], callback: () => void ) {
    this.pool.query( query, args, callback );
  }
}
