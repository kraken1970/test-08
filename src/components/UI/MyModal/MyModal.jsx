import React from 'react'
import classNames from 'classnames'
import classes from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
  const handleClose = (e) => {
    setVisible(false)
  }
  return (
    <div
      onClick={handleClose}
      className={classNames(classes.myModal, { [classes.active]: visible })}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.myModalContent}
      >
        {children}
      </div>
    </div>
  )
}

export default MyModal
