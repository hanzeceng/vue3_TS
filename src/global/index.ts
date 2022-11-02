import { App } from 'vue'
import registerElement from './register-element'

export default function globalRegister(app: App): void {
  registerElement(app)
}
