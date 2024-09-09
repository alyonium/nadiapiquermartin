export const getDate = (timestamp: string) => {
  const date = new Date(timestamp);

  return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
};
