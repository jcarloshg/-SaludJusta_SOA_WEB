import { useEffect } from 'react';

/**
 * Function to use async functions in hooks
 * @async
 * @param {Promise<AxiosResponse<any, any>>} asyncFn - async function
 * @param {Function} successFn - success function
 * @param {Function} returnFn - return function
 * @param {any[]} dependencies - dependencies
 */
function useAsync(asyncFn, successFn, returnFn, dependencies = []) {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((result) => {
      if (isActive) successFn(result.data);
    });
    return () => {
      returnFn && returnFn();
      isActive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

export default useAsync;
