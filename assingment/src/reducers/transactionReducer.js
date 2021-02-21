import  {dataSource} from '../index'


export const transactionReduser = (state, action)=>{
const list = dataSource
  
switch (action.type) {
    case 'INSERT':
        list.push(action.payload)
        return { list, currentIndex: -1 }

case 'UPDATE':
    list[state.currentIndex]= action.payload
return {list, currentIndex: -1}

case 'REMOVE':
    list.splice(action.payload, 1)
            return { list, currentIndex: -1 }

case 'EDIT-INDEX':
return {list, currentIndex: -1}

    default:
       return state
}
}