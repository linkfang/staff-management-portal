import { SIZES } from './styles'

export const TABLE_PROPS = {
  css: {
    width: `calc(100vw - ${SIZES.bodyPaddingHorizontal * 2 + SIZES.navMenuExpand + 30}px)`,
    height: SIZES.tableHeightL,
  },
  scroll: { x: 300, y: SIZES.tableHeightL },
  showSorterTooltip: false,
  pagination: {
    defaultPageSize: 15,
    pageSizeOptions: [15, 20, 40, 80],
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (value: number) => <>Total {value} people</>,
  },
}
