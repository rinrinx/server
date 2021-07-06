/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying Scopes
 * @module - Scope
 * @author Sudharshan TK
 */

import { policySchema } from '@typs/models/policy';

const IDPREFIX = 'scopes@';

export const scope_add: Readonly<policySchema> = {
  _id: `${IDPREFIX}0001`,
  name: 'Add Scopes',
  message: 'Enable Adding of Scopes to Database',
  global_flag: true,
};

export const scope_edit: Readonly<policySchema> = {
  _id: `${IDPREFIX}0002`,
  name: 'Edit Scopes',
  message: 'Enable Editing of Scopes in Database',
  global_flag: true,
};

export const scope_rm: Readonly<policySchema> = {
  _id: `${IDPREFIX}0003`,
  name: 'Remove Scopes',
  message: 'Enable Removal of Scopes from Database',
  global_flag: true,
};
