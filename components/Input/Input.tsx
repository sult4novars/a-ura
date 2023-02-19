import { Input as NextUiInput, Text, type InputProps as NextUiInputProps } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'

type InputProps = {
  name: string
} & NextUiInputProps

export const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const { register, formState } = useFormContext()
  const error = formState.errors[name]
  return (
    <>
      <NextUiInput {...rest} {...register(name)} status={error && 'error'} />
      <Text color='error'>{(error?.message as string) || ''}</Text>
    </>
  )
}
