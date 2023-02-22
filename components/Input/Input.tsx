import { Input as NextUiInput, Text, type InputProps as NextUiInputProps } from '@nextui-org/react'
import { useFormContext, type FieldValues, type Path } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  name: Path<T>
} & NextUiInputProps

export const Input = <T extends FieldValues>({ name, ...rest }: InputProps<T>) => {
  const { register, formState } = useFormContext()
  const error = formState.errors[name]
  return (
    <>
      <NextUiInput {...rest} {...register(name)} status={error && 'error'} />
      <Text css={{ height: '24px' }} color='error'>
        {(error?.message as string) || ' '}
      </Text>
    </>
  )
}
