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
import type { IPostsResponse, IPostResponse } from '@api/types/response/posts';
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

/**
 * Get By Id
 * @description Запрос для получения данных поста по ID
 * @param {number} id - ID поста
 * @returns {ServerResponse<IPostResponse>}
 */
function getById(id: number): ServerResponse<IPostResponse> {
	return catchrequest(
		api
			.get(`/posts/${id}`)
			.then(checkokstatus)
			.then((r) => {
				return {
					success: true,
					data: r.data
				} as ISuccessResponse<IPostResponse>;
			}),
		(error: unknown | AxiosError) => {
			ErrorUtils.log(error, "API: error from 'getById'");
			return ErrorUtils.getErrorReason(error);
		}
	);
}

export default {
	getAll,
	getById
};
