// API
import api from '@google/api/iam/projects/API';

// Google Request Method
import { googleApiRequest } from '@google/helpers';

// Types
import type { ITokenDoc } from '@models/tokens/types';
import type { IGoogleResponse } from '@google/helpers/types';
import type {
  TCloudApiUrlType,
  ICloudProjectResource,
} from '@google/api/iam/projects/types';

/**
 * Gets Details about a Project in Google Cloud Console
 *
 * @param {ITokenDoc} token - Token Document from Database
 * @param {string} projectId -   for which Details is to be fetched
 * @returns {Promise<IGoogleResponse<ICloudProjectResource>>} - Promise Resolving to Projects List
 */
export default function (
  token: ITokenDoc,
  projectId: string,
): Promise<IGoogleResponse<ICloudProjectResource>> {
  return googleApiRequest.get<TCloudApiUrlType, ICloudProjectResource>(
    api.get(projectId),
    token,
  );
}
