type GridSpace = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type StringOrNumberValue = number | string
export type BooleanOrStringOrNumberValue = boolean | number | string

interface ColumnOrderOffsetProps {
    size: BooleanOrStringOrNumberValue
    order: StringOrNumberValue
    offset: StringOrNumberValue
}

export interface BaseProps {
    className?: string
}

export interface ContainerProps extends BaseProps {
    fluid?: boolean | GridSpace
}

export type ColumnProps = BooleanOrStringOrNumberValue | ColumnOrderOffsetProps

export interface ColProps extends BaseProps {
    xs: ColumnProps
    sm: ColumnProps
    md: ColumnProps
    lg: ColumnProps
    xl: ColumnProps
    widths: GridSpace[]
}
