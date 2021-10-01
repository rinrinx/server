import type { TDriveUrlType } from '../types';

/** API Routes for Managing Files in Google Drive */
export default {
  /**
   * Google Drive API for Listing Files in Drive
   *
   * @module list
   * @returns {TDriveUrlType} - API String for list route
   */
  list: 'https://www.googleapis.com/drive/v3/files' as TDriveUrlType,

  /**
   * Google Drive API for Getting Details About a File
   *
   * @module get
   * @param {string} fileId - The ID o  f the file
   * @returns {TDriveUrlType} - API String for get Route
   */
  get: (fileId: string): TDriveUrlType =>
    `https://www.googleapis.com/drive/v3/files/${fileId}`,

  /**
   * Google Drive API for Download File Content
   *
   * @module get
   * @param {string} fileId - The ID of the file
   * @returns {TDriveUrlType} - API String for download Route
   */
  download: (fileId: string): TDriveUrlType =>
    `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
};