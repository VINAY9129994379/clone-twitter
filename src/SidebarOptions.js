import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({ active,text,Icon}) {
  return (
    <div className={`sidebaroptions ${active &&`sidebaroption--active`}`}>
        <Icon/>
        <h4>{text}</h4>
    </div>
  )
}

export default SidebarOptions;