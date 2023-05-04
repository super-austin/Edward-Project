export const HTTP_STATUS_CODE = {
  Success: 200,
  RequestError: 400,
  NotFound: 404,
  ServerError: 500
};

export const ERROR_MESSAGE = {
  ApiNotFound: 'Api not found!',
  ServerError: 'Error found in Server',
  RequestError: 'Error found in Request'
};

export const DEFAULT_API_RESPONSE = {
  docs: [],
  total: 0,
  limit: 0,
  offset: 0,
  page: 0,
  pages: 0
};
