import React from 'react'
import Children from './page'
const layout = () => {
  return (
    <html lang="en">
    <head>
      <title>skeleton</title>
    </head>
    <body>      
      <Children children={undefined}/>
      
    </body>
  </html>
  )
}

export default layout