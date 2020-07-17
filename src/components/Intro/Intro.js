import React from 'react'

import styles from './Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading} >Welcome to the Annotations Demo</h1>
      <h2 className={styles.description}>
        In this app, we will demonstrate how to show an annotation to the user.
        When the user scrolls down to the Items section, the Filter Icon will be annotated
        to show a brief explanation of what it does.
        Once the annotation is triggered, it won't show up again unless the user clears the website data.
      </h2>
    </div>
  )
}

export default Intro
