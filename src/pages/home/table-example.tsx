import { AppTable } from '@/components/custom/app-table'
import { Typography } from '@/components/ui/typography'
import { createColumnHelper } from '@tanstack/react-table'
import { EditIcon, EyeIcon } from 'lucide-react'

type ExampleData = {
  firstName: string
  lastName: string
  email: string
  age: number
  active: boolean
}

const data: ExampleData[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30,
    active: true,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    age: 25,
    active: false,
  },
  {
    firstName: 'Jim',
    lastName: 'Beam',
    email: 'jim.beam@example.com',
    age: 40,
    active: true,
  },
]

const columnHelper = createColumnHelper<ExampleData>()

export const TableExample = () => {
  const columns = [
    columnHelper.accessor('firstName', {
      header: 'Nome',
      meta: {
        classNameCell: 'w-[300px] truncate',
      },
    }),
    columnHelper.accessor('lastName', {
      header: 'Sobrenome',
      meta: {
        alignColumn: 'center',
      },
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      meta: {
        alignColumn: 'center',
        classNameCell: 'text-brand-primary',
      },
    }),
    columnHelper.accessor('age', {
      header: 'Idade',
      meta: {
        alignColumn: 'center',
      },
    }),
    columnHelper.accessor('active', {
      header: 'Ativo',
      meta: {
        alignColumn: 'center',
      },
      cell: ({ getValue }) => {
        const isActive = getValue()
        return (
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              isActive
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            <Typography
              variant='body3'
              color={'default'}
              className='text-center'
            >
              {isActive ? 'Sim' : 'Não'}
            </Typography>
          </div>
        )
      },
    }),
    columnHelper.accessor(() => 'actions', {
      id: 'actions',
      header: 'Ações',
      cell: () => {
        return (
          <div className='flex items-center justify-center gap-2'>
            <EyeIcon className='size-[18px] text-primary cursor-pointer hover:text-primary/40' />
            <EditIcon className='size-[18px] text-primary cursor-pointer hover:text-primary/40' />
          </div>
        )
      },
    }),
  ]

  return (
    <AppTable
      data={data}
      columns={columns}
      noDataText='Nenhum ativo encontrado'
    />
  )
}
