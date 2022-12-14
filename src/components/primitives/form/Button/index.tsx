import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, styleAliases, variants, StyledButton } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  variant?: keyof typeof variants.variant
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, css, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases })

    return (
      <StyledButton
        type="button"
        variant={variant}
        css={{ ...mediaStyles, ...css }}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </StyledButton>
    )
  }
)

export { Button }
