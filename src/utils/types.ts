export interface CommonField {
  code: string;
  caption: string;
  type: string; // FIXME: 'number' | 'string' | 'bool'
  value?: object;
}

export interface NumberFieldRules {
  qt?: number;
  lt?: number;
  qte?: number;
  lte?: number;
  eq?: number;
  neq?: number;
}

export interface StringFieldRules {
  like?: string;
  eq?: string;
  neq?: string;
}

export interface BooleanFieldRules {
  eq?: boolean;
}

export interface NumberField extends CommonField {
  value?: NumberFieldRules;
}

export interface StringField extends CommonField {
  value?: StringFieldRules;
}

export interface BooleanField extends CommonField {
  value?: BooleanFieldRules;
}

export type Field = NumberField | StringField | BooleanField

export type FieldRules = NumberFieldRules | StringFieldRules | BooleanFieldRules
