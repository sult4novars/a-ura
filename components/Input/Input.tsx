import {
  Grid,
  Input as NextUiInput,
  Text,
  type InputProps as NextUiInputProps,
} from '@nextui-org/react'
import { useFormContext, type FieldValues, type Path } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  name: Path<T>
} & Partial<NextUiInputProps>

export const Input = <T extends FieldValues>({ name, ...rest }: InputProps<T>) => {
  const { register, formState } = useFormContext()
  const error = formState.errors[name]
  return (
    <Grid.Container>
      <Grid xs={12}>
        <NextUiInput {...rest} {...register(name)} status={error && 'error'} />
      </Grid>
      <Grid xs={12}>
        <Text css={{ height: '24px' }} color='error'>
          {(error?.message as string) || ' '}
        </Text>
      </Grid>
    </Grid.Container>
  )
}
