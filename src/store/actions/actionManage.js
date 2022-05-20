export const addNewCategory = (newCategory) => (dispatch) => {
    dispatch({
        type: "STORE_NEW_CATEGORY",
        payload: { newCategory }
    })
}

export const updateCategory = (key, data) => (dispatch) => {
    dispatch({
        type: "UPDATE_CATEGORY",
        payload: { key, data }
    })
}

export const removeCategory = (key) => (dispatch) => {
    dispatch({
        type: "REMOVE_CATEGORY",
        payload: { key }
    })
}