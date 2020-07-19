import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const Button = forwardRef(({ children, onClick, variant, disabled }, ref = null) => (
    <button ref={ref} className={styles[`btn-${variant}`]} type='button' disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
)

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['white', 'blue', 'flat']).isRequired
}

Button.defaultProps = {
  disabled: false,
}

export default Button
