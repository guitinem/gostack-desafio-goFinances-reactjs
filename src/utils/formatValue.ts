const formatValue = (value: number): string => {
  const result = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRl',
  }).format(value);

  return result;
};

export default formatValue;
