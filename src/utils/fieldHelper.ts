interface Interface {
  [key: string]: string;
}

export const fieldTypes = [
  { text: 'Текстовое поле', value: 'string' },
  { text: 'Числовое поле', value: 'number' },
  { text: 'Логическое поле', value: 'bool' }
]

export const fieldTypesObj: Interface = {
  string: 'Текстовое поле',
  number: 'Числовое поле',
  bool: 'Логическое поле'
}

export const fieldRuleLabels: Interface = {
  qt: 'Больше',
  lt: 'Меньше',
  qte: 'Больше или равно',
  lte: 'Меньше или равно',
  eq: 'Равно',
  neq: 'Не равно',
  like: 'Содержит'
}
