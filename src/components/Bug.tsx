import React from 'react';
import { BugContext } from './BugContext';

const Bug = ({ bug }) => {
  const { toggleResolved } = React.useContext(BugContext);

  const handleResolve = () => toggleResolved(bug?.id);

  console.log('Bug with id ', bug?.id);

  return (
    <article className="Bug">
      <h3>{bug?.title}</h3>
      <p>{bug?.detail}</p>
      <div>
        <label>
          <input type="checkbox" checked={bug?.resolved} onChange={handleResolve} /> {' '}
          Resolved
        </label>
      </div>
    </article>
  );
};

export default React.memo(Bug);
