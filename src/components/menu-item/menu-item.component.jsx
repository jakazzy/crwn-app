import React from 'react'
import './menu-item.styles.scss'

const menuItem =({ title, imageUrl, size }) =>{
    return (
        <div 
        style={{ 
            backgroundImage: `url(${imageUrl})`
        }}
        className={`${size} menu-item`}>
        <div className='content'>
          <div className='title'>{ title }</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    )
}

export default menuItem
