import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import { transactionReduser} from './reducers/transactionReducer'



export const dataSource = [
  {
    key: '1',
    courseCode: 'CS220',
    courseName: 'Introduction To Ethics',
    date: '2021-02-10 17:01:10',
  },
  {
    key: '2',
    courseCode: 'CS102',
    courseName: 'Algorithm I',
    date: '2021-02-10 17:01:10',
  },
  {
    key: '3',
    courseCode: 'CS201',
    courseName: 'Hello World',
    date: '2021-02-10 17:01:10',
  },
];
const courseList = dataSource
let initialState= {
  currentIndex: -1,
  list: courseList 
}
var store = createStore(transactionReduser, initialState)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


