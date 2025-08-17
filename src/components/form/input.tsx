import { useFormContext } from 'react-hook-form'
import { Input, type InputProps } from '../ui/input'
import { Typography } from '../ui/typography'

type InputFormProps = InputProps & {
  name: string
  label?: string
}

export const InputForm = ({ label, ...props }: InputFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='flex flex-col gap-2'>
      {label && <label htmlFor={props.id}>{label}</label>}
      <Input
        {...props}
        {...register(props.name)}
      />
      {errors[props.name] && (
        <Typography
          variant='body3'
          color='error'
        >
          {errors[props.name]?.message as string}
        </Typography>
      )}
    </div>
  )
}
