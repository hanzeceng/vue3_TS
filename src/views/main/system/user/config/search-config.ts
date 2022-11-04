import { IForm } from '@/base-ui/form/index'
export const searchFormConfig: IForm = {
  labelWidth: '120px',
  colLayout: { span: 8 },
  itemStyle: {
    padding: '10px 40px'
  },
  formItems: [
    {
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      label: '用户ID',
      rules: [],
      placeholder: '请输入用户ID',
      type: 'password'
    },
    {
      label: '类别',
      rules: [],
      placeholder: '请输入类别',
      type: 'select',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      label: '时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      },
      type: 'datepicker'
    }
  ]
}
