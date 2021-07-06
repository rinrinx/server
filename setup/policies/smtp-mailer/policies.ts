/**
 * @file Policy Definition File
 * @description Policies Related to Adding and Modifying SMTP Mailers
 * @module - Smtp mailers
 * @author Sudharshan TK
 */

import { policySchema } from '@typs/models/policy';

const IDPREFIX = 'smtp@mailer-';

export const smtp_mailer_add: Readonly<policySchema> = {
  _id: `${IDPREFIX}0001`,
  name: 'Add SMTP Emails Accounts',
  message: 'Enable Adding of SMTP Emails Accounts to Database',
  global_flag: true,
};

export const smtp_mailer_edit: Readonly<policySchema> = {
  _id: `${IDPREFIX}0002`,
  name: 'Edit SMTP Emails Accounts',
  message: 'Enable Editing of SMTP Emails Accounts in Database',
  global_flag: true,
};

export const smtp_mailer_rm: Readonly<policySchema> = {
  _id: `${IDPREFIX}0003`,
  name: 'Remove SMTP Emails Accounts',
  message: 'Enable Removal of SMTP Emails Accounts from Database',
  global_flag: true,
};
