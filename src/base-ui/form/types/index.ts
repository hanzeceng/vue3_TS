type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  label: string
  rules?: any[]
  placeholder?: string
  type: IFormType
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
