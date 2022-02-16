import React from 'react';
import Bug from './Bug';
import { BugContext } from './BugContext';

const Bugs = () => {
  const { bugs } = React.useContext(BugContext)
  return (
    <div className='Scrollable'>
      <section className="BugsSection">
        <h2>Available Bugs ({bugs.length})</h2>
        {bugs.map(bug => (
          <Bug key={bug?.id} bug={bug} />
        ))}
      </section>
    </div>

  );
};

export default Bugs;
