// Dateをyyyy-mm-dd hh:mm形式にフォーマット
export const changeDateFormat = (date: Date) => {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
  );
};
