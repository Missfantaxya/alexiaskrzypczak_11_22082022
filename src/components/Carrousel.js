import { useState } from 'react'

import './Carrousel.css'

function Carrousel ({pictures})
{
  console.log( "pictures : ", pictures ) //* array
  // console.log("pictures.lenght -1 : ",pictures.length - 1)//*
  
  const [ pictureIndex, setPictureIndex ] = useState( 0 )
  
  function HandlePreviousClick ()
  {
    if ( pictureIndex === 0 )
    {
      let lastPicture = pictures.length-1
      setPictureIndex( lastPicture )
    } else
    {
      let previousPicture = pictureIndex - 1
      setPictureIndex( previousPicture )
    }
  }
  
  function HandleNextClick ()
  {
    if ( pictureIndex === pictures.length-1 )
    {
      let firstPicture = 0
      setPictureIndex( firstPicture )
    } else
    {
      let nextPicture = pictureIndex + 1
      setPictureIndex( nextPicture )
    }
  }



  
  const multipesPictures = pictures.length > 1

  return ( 
    <div className="carrousel">
      { multipesPictures &&
        <button
          className='carrousel__button carrousel__previous'
          onClick={ HandlePreviousClick }
        >
          précédent
        </button>
      }
          <img
          src={ pictures[pictureIndex] }
          alt="logement"
        className="carrousel__picture"
      />
      { multipesPictures &&
        <button
          className='carrousel__button carrousel__next'
          onClick={HandleNextClick}
        >
          suivant
        </button>
      }
    </div>
  )
}

export default Carrousel
