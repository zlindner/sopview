import React from 'react';
import { render } from 'react-dom';

import Documents from './components/documents';

render(
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Documents />
    </div>,
    document.getElementById('root')
);

