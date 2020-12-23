// const posts = [
//     { id: 1, text: 'Lorem' },
//     { id: 2, text: 'Ipsum' },
//     { id: 3, text: 'Dolor' },
//     { id: 4, text: 'Sit' },
//  ]

export interface PostsState {
    items: {id: number, text: string}[];
}

const initialState: PostsState = {
    items:  [
            { id: 1, text: 'Lorem' },
            { id: 2, text: 'Ipsum' },
            { id: 3, text: 'Dolor' },
            { id: 4, text: 'Sit' },
         ]
}

export default (state = initialState) => {
    return state;
}