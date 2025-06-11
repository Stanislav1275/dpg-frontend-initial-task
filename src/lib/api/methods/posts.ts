/**
 * Dependence
 */
import { api } from '@api/api';
import { ErrorUtils } from '@utils/error';
import { catchrequest, checkokstatus } from '@api/utils/requests';

/**
 * Types
 */
import type { AxiosError } from 'axios';
import type { IPostsResponse } from '@api/types/response/posts';
import type { ISuccessResponse, ServerResponse } from '@api/types/response/utils';

/**
 * Get All
 * @description Запрос для получения данных по постам
 * @returns {ServerResponse<IPostsResponse>}
 */
function getAll(): ServerResponse<IPostsResponse> {
	return catchrequest(
		api
			.get('/posts')
			.then(checkokstatus)
			.then((r) => {
				return {
					success: true,
					data: r.data
				} as ISuccessResponse<IPostsResponse>;
			}),
		(error: unknown | AxiosError) => {
			ErrorUtils.log(error, "API: error from 'getAll'");
			return ErrorUtils.getErrorReason(error);
		}
	);
}

export default {
	getAll
};
