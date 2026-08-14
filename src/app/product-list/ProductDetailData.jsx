import React from 'react'

const productDetailData = ({ data }) => {
  const { title, description, image } = data;

  // console.log("thumbnail", thumbnail)
  console.log("thumbnail", data)
  return (
    <>
      Title : {title}
      <span>
        Desc : {description}
      </span>

    
        <img className='w-full' src={image} alt="img" />
    </>
  )
}

export default productDetailData