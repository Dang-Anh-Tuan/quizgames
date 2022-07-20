const validateFiled = function (field, regex, error) {
  return field.match(regex) ? "" : error;
};

export default validateFiled;
