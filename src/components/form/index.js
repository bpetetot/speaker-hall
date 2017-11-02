import withLabel from './label'

import Input from './input'
import Textarea from './textarea'

export { default as Input } from './input'
export { default as Textarea } from './textarea'
export const InputLabel = withLabel(Input)
export const TextareaLabel = withLabel(Textarea)
