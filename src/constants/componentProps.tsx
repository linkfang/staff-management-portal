import { SIZES } from './styles'

type TTableProps = { showTotalLabel?: string }

export const TABLE_PROPS = ({ showTotalLabel }: TTableProps) => ({
  css: {
    width: SIZES.pageWidth,
    height: SIZES.tableHeightL,
  },
  scroll: { x: 300, y: SIZES.tableHeightL },
  showSorterTooltip: false,
  pagination: {
    defaultPageSize: 15,
    pageSizeOptions: [15, 20, 40, 80],
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (value: number) => (
      <>
        Total {value} {showTotalLabel ?? 'items'}
      </>
    ),
  },
})

export const MODAL_PROPS = (isMutating: boolean) =>
  ({
    destroyOnClose: true,
    confirmLoading: isMutating,
    maskClosable: !isMutating,
    closable: !isMutating,
    cancelButtonProps: { disabled: isMutating },
    centered: true,
  }) as const
