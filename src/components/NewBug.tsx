import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BugContext } from './BugContext';


const NewBug = () => {
  const [title, setTitle] = React.useState('')
  const [detail, setDetail] = React.useState('')
  const { handleSubmit } = React.useContext(BugContext);

  const handleSubmitted = (event) => {
    event.preventDefault();

    const newBug = {
      id: uuidv4(),
      title,
      detail,
      resolved: false,
    }
    handleSubmit({ ...newBug })
  }

  console.log('Add new bug rendered');

  return (
    <div className='NewBugSection'>
      <h2>Add new bug</h2>
      <form className="NewBug" onSubmit={handleSubmitted}>
        <div className='Form-field'>
          <input
            className="NewBug-title"
            placeholder="Bug title"
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <div className='Form-field'>
          <textarea
            className="NewBug-detail"
            placeholder="Bug detail"
            value={detail}
            onChange={event => setDetail(event.target.value)}
          />
        </div>

        <button className="NewBug-submit button" type="submit">
          Add bug
        </button>
      </form>
    </div>

  )
}

export default React.memo(NewBug);