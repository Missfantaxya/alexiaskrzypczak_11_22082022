import { useState } from 'react'

import './Dropdown.css'

const Arrow = ( sizeW, sizeH, color) => (
  <svg width={ sizeW } height={ sizeH } fill={ color } xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8495 9.1944L15.2079 7.8283L7.60994 0.238037L0.0120036 7.83598L1.37042 9.1944L7.60994 2.95488L13.8495 9.1944Z"/>
  </svg>
)


function Dropdown (description)
{
  const [ open, setOpen ] = useState( false )

  const dropdownnContentClassname =!open? 'dropdownn__content--close' : 'dropdownn__content--open'
  

  return (
    <div>
      <div key={ description.menu } className='lodging__dropdown'>
        <button
          className='dropdown__title'
          type='button'
          onClick={ () => setOpen( !open ) }
        >
          <span>{ description.menu }</span>
          <span className='dropdown__arrow--close'>
            { Arrow( 15.2, 8.96, "#ffffff" ) }
          </span>
        </button> 
        <div>
          <div
            className={ dropdownnContentClassname }
          >
            {description.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
