function Form() {
    const registerUser = async event => {
      event.preventDefault()
  
      const res = await fetch(
        '',
        {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
  
      const result = await res.json()
      // result.user => 'Ada Lovelace'
    }
  
    return (
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <button type="submit">Register</button>
      </form>
    )
  }