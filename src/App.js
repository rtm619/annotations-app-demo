import React from 'react';

import styles from './App.module.scss'
import Button from './components/Button/Button';
import Annotation from './components/Annotation/Annotation';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnnotation: false,
    }
    this.emojiButtonRef = React.createRef()
  }

  toggleAnnotation = (state = false) => {
    this.setState({
      showAnnotation: state,
    })
  }

  render() {
    const { showAnnotation } = this.state
    return (
      <div className={styles.container}>
        <h1 className={styles.introSection}>
          Welcome to the Annotations App Demo
        </h1>
        <div className={styles.firstSection}>
          <Button onClick={() => false} variant="white" ref={this.emojiButtonRef}>
            <span role="img" aria-label='emoji'>&#128512;&#128516;&#128151;&#128525;</span>
          </Button>
        </div>
        <div className={styles.secondSection}>
          <Button variant='blue' onClick={this.toggleAnnotation.bind(this, true)} ref={null}>
            Click Here to Toggle Annotation
          </Button>
        </div>
        {showAnnotation && (
          <Annotation
            elementRef={this.emojiButtonRef}
            toggleClose={this.toggleAnnotation.bind(this, false)}
          >
            <div className={styles.annotationArrow} />
            <div className={styles.annotation}>
              <h2 className={styles.annotationText}>
                This is an Emoji Button!
            </h2>
            <Button ref={null} variant='flat' onClick={this.toggleAnnotation.bind(this, false)}>
              OK
            </Button>
            </div>
          </Annotation>

        )}
      </div>
    );
  }
}

export default App;
