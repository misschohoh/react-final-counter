export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const changeCount = () => {
  return {
  type: 'CHANGECOUNT'
  }
};

export const changeNewValue = (newValue) => {
  return {
  type: 'NEWVALUE',
  newValue: newValue
  }
};
