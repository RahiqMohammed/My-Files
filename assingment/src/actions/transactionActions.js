export const insert =(data) => {
    return{
        type: 'INSERT',
        payload: data,
    }
}

export const update =(data) => {
    return{
        type: 'UPDATE',
        payload: data,
    }
}

export const remove = index => {
    return {
        type: 'REMOVE',
        payload: index
    }

}

export const editIndex =(index) => {
    return{
        type: 'EDIT-INDEX',
        payload: index,
    }
}