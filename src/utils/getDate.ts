export const getDate = (timestamp: string) => {
  const date = new Date(timestamp);

  const getMonth = () => {
    const actualMonth = date.getMonth() + 1;

    if (actualMonth >= 10) {
      return actualMonth;
    } else {
      return `0${actualMonth}`;
    }
  };

  return date.getDate() + '/' + getMonth() + '/' + date.getFullYear();
};
