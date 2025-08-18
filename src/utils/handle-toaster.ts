import { toast } from 'sonner'

export const handleToaster = (params: {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}) => {
  const defaultParams = {
    position: 'top-right',
    closeButton: true,
  } as const

  if (params.type === 'success') {
    return toast.success(params.message, {
      style: {
        backgroundColor: 'green',
        color: 'white',
      },
      ...defaultParams,
    })
  }
  if (params.type === 'error') {
    return toast.error(params.message, {
      style: {
        backgroundColor: 'red',
        color: 'white',
      },
      ...defaultParams,
    })
  }

  return toast(params.message, {
    position: 'top-right',
  })
}
