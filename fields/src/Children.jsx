
const Children = ({ handleFieldDelete, fieldIndex }) => {

  return (
    <button onClick={() => handleFieldDelete(fieldIndex)}>
      Удалить
    </button>
  )
}

export default Children