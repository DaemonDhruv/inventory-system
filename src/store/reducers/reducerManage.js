import uniqid from 'uniqid';

const initialState = {
    categories: {},
    types: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_NEW_CATEGORY":
            return {
                ...state,
                categories: { ...state.categories, [uniqid.process()]: { ...action.payload.newCategory } }
            }
        case "UPDATE_CATEGORY":
            var { key, data } = action.payload

            // We don't want newly created category without name and fields to be visible while adding Machines
            if (data.categoryName !== "" && data.fields.length > 0) {
                data.shouldBeListed = true;
            }
            return {
                ...state,
                [key]: { ...state.categories[key], data }
            }
        case "REMOVE_CATEGORY":
            const newCategories = { ...state.categories }
            console.log(action.payload.key)
            delete newCategories[action.payload.key];
            console.log(newCategories)
            return {
                ...state,
                categories: { ...newCategories }
            }
        default:
            return state;
    }
}

export default reducer;