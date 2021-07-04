import { Schema, model } from 'mongoose';
import type { globalSettings as GlobalSettingsType } from '../types/models';

const globalSettingsSchema = new Schema<GlobalSettingsType>({
  _id: {
    type: String,
    required: true,
    unique: true,
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
    type: Boolean || String || Number,
    required: true,
  },
});

const GlobalSettings = model<GlobalSettingsType>(
  'GlobalSetting',
  globalSettingsSchema,
);
export default GlobalSettings;
