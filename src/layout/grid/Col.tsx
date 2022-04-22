import React from 'react'
import classNames from 'classnames'
import { ColProps, StringOrNumberValue, BooleanOrStringOrNumberValue } from './type'

const getColumnSizeClass = (isXs: boolean, colWidth: StringOrNumberValue, colSize: BooleanOrStringOrNumberValue) => {
    if (colSize === true || colSize === '') {
        return isXs ? 'col' : `col-${colWidth}`
    }
    if (colSize === 'auto') {
        return isXs ? 'col-auto' : `col-${colWidth}-auto`
    }

    return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`
}

export const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
    const { className, widths, ...attributes } = props
    const colClasses = []

    widths.forEach((colWidth: string, i: number) => {
        const columnProp = (props as any)[colWidth]

        delete (attributes as any)[colWidth]

        if (!columnProp && columnProp !== '') {
            return
        }

        const isXs = !i

        if (typeof columnProp === 'object') {
            const colSizeInterfix = isXs ? '-' : `-${colWidth}-`
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size)

            colClasses.push(
                classNames({
                    [colClass]: columnProp.size || columnProp.size === '',
                    [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
                    [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0,
                })
            )
        } else {
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp)
            colClasses.push(colClass)
        }
    })

    if (!colClasses.length) {
        colClasses.push('col')
    }

    const classes = classNames(className, colClasses)

    return <div {...attributes} className={classes} ref={ref} />
})

Col.defaultProps = {
    widths: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
}

Col.displayName = 'Col'
