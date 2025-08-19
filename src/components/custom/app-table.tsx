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
        'flex flex-col gap-4 border-2 border-gray-200 rounded-lg py-4 px-4 overflow-y-auto',
        className
      )}
    >
      <Table>
        <TableHeader>
          <TableRow>
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
                    className={`text-${alignText}`}
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
                        className={classNameHeader}
                      >
                        {header.column.columnDef.header?.toString()}
                      </Typography>
                    )}
                  </TableHead>
                )
              })
            )}
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const { meta } = cell.column.columnDef
                  const alignText = meta?.alignColumn || 'left'
                  const hasCustomCell = !!cell.column.columnDef.cell
                  const classNameCell = meta?.classNameCell || ''

                  return (
                    <TableCell
                      key={cell.id}
                      align={alignText}
                      className='whitespace-normal'
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
                          className={classNameCell}
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
            <TableRow className='h-[600px]'>
              <TableCell
                colSpan={columns.length}
                className='text-center'
              >
                <Typography
                  variant='body3'
                  color={'default'}
                  weight={'normal'}
                >
                  {noDataText || 'Nenhum dado encontrado'}
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {caption && <TableCaption>{caption}</TableCaption>}
      </Table>
    </div>
  )
}
