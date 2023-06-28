import React from 'react'
import BottomBg from './Background/BottomBg'
import TopBg from './Background/TopBg'

const BaseBg = (props) => {
  return (
    <div>
        <TopBg />
            {props.children}
        <BottomBg />
    </div>
  )
}

export default BaseBg