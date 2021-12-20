import { PendingUsers } from '@models';
import { users as UserPolicies } from '@plugins/templates/policies';
import { checkPolicy } from '@plugins/auth/helpers/policy-checker';

import type { Error as MongoError } from 'mongoose';
import type { IPendingUserDoc } from '@models/pending-user/types';
import type { IUserDoc } from '@models/user/types';
import type { IScopeDoc } from '@models/scope/types';

/**
 * Accept a Request from User as a Viewer Role for the Particular Scope
 *
 * @param {IUserDoc} admin - Admin User with which to Create the User
 * @param {string} scope - Scope for which User Should be Accepted
 * @param {IPendingUserDoc} pendingUser - User Object containing Details
 * @returns {boolean} - (true/false)
 */
export default function (
  admin: IUserDoc,
  scope: IScopeDoc['_id'],
  pendingUser: IPendingUserDoc,
): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    const createUserPolicies = [UserPolicies.add.accept.viewer];
    checkPolicy(createUserPolicies, scope, admin)
      .then((policyCheck) => {
        if (policyCheck) {
          const setValues = {
            accepted: true,
            accepted_at: Date.now(),
          };
          PendingUsers.updateOne({ _id: pendingUser._id }, setValues)
            .then(() => resolve(true))
            .catch((err: MongoError) => {
              reject(new Error(`${err.name}: ${err.message}`));
            });
        }
      })
      .catch((err: string) => {
        reject(new Error(err));
      });
  });
}
