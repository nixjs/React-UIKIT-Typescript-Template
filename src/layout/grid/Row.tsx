import React from 'react'
import classNames from 'classnames'
import { BaseProps } from './type'

export const Row = React.forwardRef<HTMLDivElement, BaseProps>(({ className, ...props }, ref) => {
    return <div className={classNames('row', className)} ref={ref} {...props} />
})

Row.defaultProps = {}

Row.displayName = 'Row'
