import React from 'react'
import classNames from 'classnames'
import { ContainerProps } from './type'

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ fluid, className, ...props }, ref) => {
    const prefix = 'container'
    const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid'
    return <div className={classNames(fluid ? `${prefix}${suffix}` : prefix, className)} ref={ref} {...props} />
})

Container.defaultProps = {
    fluid: false,
}

Container.displayName = 'Container'
