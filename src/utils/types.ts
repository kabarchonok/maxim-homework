export interface CommonField {
  code?: string
  caption: string
  type: string //FIXME: 'number' | 'string' | 'bool'
  value?: object
}


export interface NumberField extends CommonField {
  value?: {
    qt?: number
    lt?: number
    qte?: number
    lte?: number
    eq?: number
    neq?: number
  }
}

export interface StringField extends CommonField {
  value?: {
    like?: string
    eq?: string
    neq?: string
  }
}

export interface BooleanField extends CommonField {
  value?: {
    eq?: boolean
  }
}

export type Field = NumberField | StringField | BooleanField
