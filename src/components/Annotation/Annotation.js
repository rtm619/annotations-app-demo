import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Annotation.module.scss'

export default class Annotation extends Component {
  static propTypes = {
    elementRef: PropTypes.object.isRequired,
    toggleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props)
    this.elementWrapperRef = React.createRef()
    this.wrapperRef = React.createRef()
  }

  componentDidMount = () => {
    const { elementRef, toggleClose } = this.props
    if (elementRef.current) {
      const clonedElement = elementRef.current.cloneNode(true)
      clonedElement.addEventListener('click', toggleClose)
      const elementPosition = elementRef.current.getBoundingClientRect()
      if (this.elementWrapperRef.current && this.wrapperRef.current) {
        this.elementWrapperRef.current.appendChild(clonedElement)
        this.wrapperRef.current.style.top = elementPosition.top + 'px'
        this.wrapperRef.current.style.left = elementPosition.left + 'px'
      }
    }
  }

  render() {
    const { children, className } = this.props
    return (
      <>
        <div className={styles.backdrop} />
        <div ref={this.wrapperRef} className={styles.container}>
          <div ref={this.elementWrapperRef} className={styles.annotationWrapper}>
            <div className={`${styles.annotationInfo} ${className}`}>
              {children}
            </div>
          </div>
        </div>
      </>
    )
  }
}
