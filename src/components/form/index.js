import withLabel from './withLabel'
import Input from './input'
import Textarea from './textarea'
import RadioGroup from './radioGroup'

/** exported components */
export { default as withLabel } from './withLabel'

export { default as Input } from './input'
export const InputLabel = withLabel(Input)

export { default as Textarea } from './textarea'
export const TextareaLabel = withLabel(Textarea)

export { default as RadioGroup } from './radioGroup'
export const RadioGroupLabel = withLabel(RadioGroup)

export { default as RadioBox } from './radioBox'
