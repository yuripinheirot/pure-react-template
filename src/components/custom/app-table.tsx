import {
  useReactTable,
  getCoreRowModel,
  type ColumnDef,
  flexRender,
} from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table'
import { Typography } from '../ui/typography'

type AppTableProps<Data> = {
  data: Data[]
  columns: ColumnDef<Data, any>[]
  caption?: string
  noDataText?: string
  className?: string
}

export const AppTable = <Data,>({
  data,
  columns,
  caption,
  noDataText,
  className,
}: AppTableProps<Data>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div
      className={cn(
        'w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden',
        className
      )}
    >
      <Table>
        <TableHeader>
          <TableRow className='border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50/50'>
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => {
                const alignText =
                  header.column.columnDef.meta?.alignColumn || 'left'
                const { meta } = header.column.columnDef
                const hasCustomHeader =
                  typeof header.column.columnDef.header === 'function'
                const classNameHeader = meta?.classNameHeader || ''

                return (
                  <TableHead
                    key={header.id}
                    className={cn(
                      'py-4 px-6 first:pl-6 last:pr-6',
                      `text-${alignText}`,
                      classNameHeader
                    )}
                  >
                    {hasCustomHeader ? (
                      flexRender(
                        header.column.columnDef.header as React.ReactNode,
                        header.getContext()
                      )
                    ) : (
                      <Typography
                        variant='body2'
                        color={'primary'}
                        weight={'medium'}
                        className='text-gray-700 uppercase tracking-wide text-xs'
                      >
                        {header.column.columnDef.header?.toString()}
                      </Typography>
                    )}
                  </TableHead>
                )
              })
            )}
            <TableHead className='w-4'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                className={cn(
                  'border-b border-gray-50 transition-colors duration-150',
                  'hover:bg-gray-50/50',
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                )}
              >
                {row.getVisibleCells().map((cell) => {
                  const { meta } = cell.column.columnDef
                  const alignText = meta?.alignColumn || 'left'
                  const hasCustomCell = !!cell.column.columnDef.cell
                  const classNameCell = meta?.classNameCell || ''

                  return (
                    <TableCell
                      key={cell.id}
                      align={alignText}
                      className={cn(
                        'py-4 px-6 first:pl-6 last:pr-6',
                        'whitespace-normal',
                        classNameCell
                      )}
                    >
                      {hasCustomCell ? (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      ) : (
                        <Typography
                          variant='body3'
                          color={'default'}
                          weight={'normal'}
                          className='text-gray-600'
                        >
                          {cell.getValue() as string | number}
                        </Typography>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow className='h-32'>
              <TableCell
                colSpan={columns.length}
                className='text-center py-12'
              >
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <div className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                  </div>
                  <Typography
                    variant='body2'
                    color={'default'}
                    weight={'medium'}
                    className='text-gray-500'
                  >
                    {noDataText || 'Nenhum dado encontrado'}
                  </Typography>
                  <Typography
                    variant='body3'
                    color={'default'}
                    weight={'normal'}
                    className='text-gray-400'
                  >
                    Tente ajustar os filtros ou adicionar novos dados
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {caption && (
          <TableCaption className='py-4 px-6 bg-gray-50/50 border-t border-gray-100'>
            <Typography
              variant='body3'
              color='default'
              weight='normal'
              className='text-gray-500'
            >
              {caption}
            </Typography>
          </TableCaption>
        )}
      </Table>
    </div>
  )
}
