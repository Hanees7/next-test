import React from 'react'
import { devDelay } from '../../utils/devDelay'

const page = async () => {
  await devDelay()

  return (
    <>
    Full Stack Page
    </>
  )
}

export default page
