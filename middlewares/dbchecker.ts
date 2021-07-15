import { STATES, connection } from 'mongoose';

// Types
import type { Request, Response, NextFunction } from 'express';
import type { InternalErrorResponse } from '@responses/5XX-error-response';

/**
 * Checks whether DB is Accessible by Checking the Mongoose Connection Status
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express Next Function
 */
function dbChecker(req: Request, res: Response, next: NextFunction): void {
  const mongoState = connection.readyState;
  if ([0, 2, 3].includes(mongoState)) {
    const result: InternalErrorResponse = {
      status: 500,
      error: `Database is ${STATES[mongoState]}`,
      message: 'Internal Server Error Related to Database',
    };
    res.status(500).json(result);
  } else {
    res.locals.dbcheck = true;
    next();
  }
}

export default dbChecker;
