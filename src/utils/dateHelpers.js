export const dateRangeToPercentage = (startDate, endDate) => {
  const today = new Date();
  const q = Math.abs(today - startDate);
  const d = Math.abs(endDate - startDate);

  const percentage = Math.round((q / d) * 100);

  return percentage >= 100 ? 100 : percentage;
};
