type CurrentBook = {
    volumeInfo: {
        imageLinks: any,
        title: string,
        authors: string[],
        categories?: string[],
        description?: string
    },
}

export default CurrentBook;