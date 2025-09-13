export const handleError = async ({ event, error }) => {
    console.error(error);
    const err = error as Error;
    const stacktrace = err.stack || 'Stack trace unavailable';
    return {
      message: err.message,
    }
  };