
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 <CommentBox />,
 document.getElementById('root')
);



registerServiceWorker();
