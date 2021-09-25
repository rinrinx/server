import { Schema } from 'mongoose';
import { createDoc, clearAll, mapCheck } from './statics';
import type { IPolicyDoc, IPolicyModel } from './types';

const schema = new Schema<IPolicyDoc, IPolicyModel>({
  _id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  global_flag: {
    type: Boolean,
    required: true,
  },
  allowed_roles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Role',
    },
  ],
});

schema.statics.createDoc = createDoc;
schema.statics.clearAll = clearAll;
schema.statics.mapCheck = mapCheck;

export default schema;
