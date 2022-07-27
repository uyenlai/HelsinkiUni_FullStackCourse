import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit= (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  function showName(element) {
   return(
    <div key={element.name}>
      {element.name}
    </div>
   )
  }  
  const newPerson = persons.map(showName)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input 
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
      {newPerson}
      </>
      
    </div>

  )
}

export default App