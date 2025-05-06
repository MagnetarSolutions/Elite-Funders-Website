export const sanitizeFormData = (data, allowedFields) => {
  return Object.keys(data).reduce((acc, key) => {
    if (allowedFields.includes(key)) {
      acc[key] = data[key];
    }
    return acc;
  }, {});
};
