/**
 * Dependence
 */
import { isAxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';

/**
 * Dependence Types
 */
import type { AxiosError } from 'axios';
import type { IErrorResponse } from '$lib/api/types/response/utils';

/**
 * Interface of error utils
 */
export interface ErrorUtils {
	/**
	 * Log error
	 * @param {unknown} error - Axios error of unknown
	 * @param {string} [title='API: unknown error'] - Title of error. Default is 'API: unknown error'
	 */
	log(error: AxiosError | unknown, title?: string): void;

	/**
	 * Check error cancel
	 * @param {AxiosError} error - Axios error
	 */
	isCancelError(error: AxiosError): boolean;

	/**
	 * Get Error Reason
	 * @description Метод для получения тела ошибки
	 * @param {AxiosError} error
	 */
	getErrorReason(error: AxiosError | unknown): IErrorResponse;
}

/**
 * Error utils
 * @type {ErrorUtils}
 */
export const ErrorUtils: ErrorUtils = {} as ErrorUtils;

/**
 * Log error
 * @param {unknown} error - Axios error of unknown
 * @param {string} [title='API: unknown error'] - Title of error. Default is 'API: unknown error'
 */
ErrorUtils.log = function (
	error: AxiosError | unknown,
	title: string = 'API: unknown error'
): void {
	if (isAxiosError(error)) {
		console.error(title, error?.response?.data?.message ?? error?.message ?? error);
	} else {
		console.error(title, error);
	}
};

/**
 * Check error cancel
 * @param {AxiosError} error - Axios error
 */
ErrorUtils.isCancelError = function (error: AxiosError) {
	return error?.name === 'CanceledError';
};

ErrorUtils.getErrorReason = function (error: AxiosError | unknown): IErrorResponse {
	if (!isAxiosError(error))
		return { success: false, data: { code: 500, message: 'Unknown error' } };

	if (error.name === 'CancelError' || error.message === 'canceled') {
		return {
			success: false,
			data: {
				code: StatusCodes.OK,
				isCanceled: true,
				message: error.message
			}
		};
	}

	if (error.code === 'ERR_NETWORK') {
		return {
			success: false,
			data: {
				code: StatusCodes.BAD_GATEWAY,
				isNetworkError: true,
				message: error.message
			}
		};
	}

	const statusCode = error.status || error.response?.status || 500;

	if (error.response?.data) {
		return {
			success: false,
			data: {
				...error.response.data,
				code: statusCode
			}
		};
	} else {
		return {
			success: false,
			data: {
				code: statusCode,
				message: error.message || 'Unknown error'
			}
		};
	}
};
