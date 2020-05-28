interface Interface {
  text: string;
  value: string;
}

export const StringRules: Interface[] = [
  { text: 'Содержит', value: 'like' },
  { text: 'Равно', value: 'eq' },
  { text: 'Не равно', value: 'neq' }
]

export const NumberRules: Interface[] = [
  { text: 'Больше', value: 'qt' },
  { text: 'Меньше', value: 'lt' },
  { text: 'Больше или равно', value: 'qte' },
  { text: 'Меньше или равно', value: 'lte' },
  { text: 'Равно', value: 'eq' },
  { text: 'Не равно', value: 'neq' }
]

export const BoolRules: Interface[] = [
  { text: 'Равно', value: 'eq' }
]
