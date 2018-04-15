/*
export const someMutation = (state) => {
}
*/
export const contactModal = (state, payload) => {
    console.log('state')
    console.log(state)
    state.contactModal = payload
}
