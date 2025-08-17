import { toast } from 'sonner'

export const handleToaster = (params: {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}) => {
  if (params.type === 'success') {
    return toast.success(params.message, {
      style: {
        backgroundColor: 'green',
        color: 'white',
      },
      position: 'top-right',
    })
  }
  if (params.type === 'error') {
    return toast.error(params.message, {
      style: {
        backgroundColor: 'red',
        color: 'white',
      },
      position: 'top-right',
    })
  }

  return toast(params.message, {
    position: 'top-right',
  })
}
