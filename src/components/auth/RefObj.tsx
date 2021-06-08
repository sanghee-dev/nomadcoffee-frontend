const RefObj = (name: string) => {
  return {
    required: `${name} is required.`,
    minLength: {
      value: 5,
      message: `${name} should be longer than 5 chars.`,
    },
    maxLength: {
      value: 20,
      message: `${name} should be less than 20 chars.`,
    },
  };
};

export default RefObj;
