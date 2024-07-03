import React from 'react'

const Forms = ({ title, todo, handelSubmit, formHandle }) => {
  // console.log(state);
  // console.log(formHandle);
  return (
    <main id='formWrapper'>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label> <br />
          <input type="text" placeholder='Enter Title' value={title} name='title' onChange={formHandle} />
        </div>
        <div className="form-group">
          <label htmlFor="todo">Todo</label> <br />
          <input type="text" placeholder='Enter Todo' value={todo} onChange={formHandle} name="todo" />
        </div>
        <br />
        <div className="form-group">
          <button onClick={handelSubmit}>Submit</button>
        </div>
      </form>
    </main>
  )
}

export default Forms
