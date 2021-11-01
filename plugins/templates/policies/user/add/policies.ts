/**
 * @file Policy Definition File
 * @description Policies Related to Adding Various Types of Users
 * @module - User[Add]
 * @author Sudharshan TK
 */

import type { IPolicy } from '@models/policy/types';
import { Types } from 'mongoose';

const objectID = (num: string) => Types.ObjectId(`p-user-a@${num}`);

export const viewer_add: Readonly<IPolicy> = {
  _id: objectID('001'),
  name: 'Add Viewer',
  message: 'Enable Accepting of Requests for Viewers and its Delegates',
  global_flag: true,
};

export const content_mgr_add: Readonly<IPolicy> = {
  _id: objectID('002'),
  name: 'Add Content Managers',
  message:
    'Enable Accepting of Requests for Content Managers and its Delegates',
  global_flag: true,
};

export const mod_add: Readonly<IPolicy> = {
  _id: objectID('003'),
  name: 'Add Moderators',
  message: 'Enable Accepting of Requests for Moderators and its Delegates',
  global_flag: true,
};

export const mgr_add: Readonly<IPolicy> = {
  _id: objectID('004'),
  name: 'Add Managers',
  message: 'Enable Accepting of Requests for Managers and its Delegates',
  global_flag: true,
};

export const self_content_mgr_add: Readonly<IPolicy> = {
  _id: objectID('005'),
  name: 'Promote to Content Managers',
  message:
    'Enable Promoting of Users to Content Managers without their Request and its Delegates',
  global_flag: true,
};

export const self_mod_add: Readonly<IPolicy> = {
  _id: objectID('006'),
  name: 'Promote to Moderators',
  message:
    'Enable Promoting of Users to Moderators without their Request and its Delegates',
  global_flag: true,
};

export const self_mgr_add: Readonly<IPolicy> = {
  _id: objectID('007'),
  name: 'Promote to Manager',
  message:
    'Enable Promoting of Users to Managers without their Request and its Delegates',
  global_flag: true,
};
