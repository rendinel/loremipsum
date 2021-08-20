import React, { useState } from 'react'
import data from './data'
function App() {
  //modify count that is my input data from number
  const [count, setCount] = useState(0)
  //usual to display the data from the external file
  const [text, setText] = useState([])

  //preventdrfault so the app won't rerender everytime,we get a string from the input so we convert into a number, our array have 8 element so we pass some default value if count <=0 or count >8 then we pass the data to our text with the slice method so we get back from 0 to the amount we select from the input
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <p id='warning'></p>
      <article className='lorem-text'>
        {/* in this case we can use the index instead of the id, if we need to delete or add element an id it's  better because the index can cause problem */}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
