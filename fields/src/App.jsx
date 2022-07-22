import { useState } from 'react'
import './App.css'

import Children from './Children'

const App = () => {
  const [fields, setFields] = useState([])

  const handleAddNewField = (fieldType) => {
    const handleFieldDelete = (index) => {
      console.log({ fields, index })
    }
    const field = { fieldType, handleFieldDelete }
    setFields([...fields, field])
  }

  return (
    <div className='slates'>
      <button
        onClick={() => handleAddNewField('text')}>
        Текст
      </button>

      <div className='fields'>
        {fields.map((field, index) => {

          return (
            <div className='field' key={index}>
              <Children {...field} fieldIndex={index} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App