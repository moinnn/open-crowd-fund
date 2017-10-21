import React from 'react';
import styled from 'styled-components';

import withFundings from './withFundings';
import Currency from './Currency';

const Progress = ({ fundings }) => (
  <div>
    {fundings.length ? (
      <div>
        <h2>List of Backers</h2>
        <ul>
          {fundings.map(funding => (
            <li key={funding.id}>
              {funding.amount}
              <Currency currency={funding.currency} /> by{' '}
              {funding.includeBacker ? funding.email : 'anonymous'}
            </li>
          ))}
        </ul>
      </div>
    ) : null}
  </div>
);

export default withFundings(Progress);
