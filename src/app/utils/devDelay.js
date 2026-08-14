export const devDelay = async (ms = 900) => {
  if (process.env.NODE_ENV === "development") {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
};
