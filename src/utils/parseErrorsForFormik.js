export const parseErrorsForFormik = (data) => {
  let errors = {};
  for (const [key, value] of Object.entries(data)) {
    errors = { ...errors, [key]: value[0] };
  }
  return errors;
};
