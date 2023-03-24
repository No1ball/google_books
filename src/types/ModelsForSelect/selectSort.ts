type SortData ={
    title: string,
    data: any[]
}

const sortObj : SortData ={
    title: 'Sort By',
    data:[
        {
            value: "relevance",
            name:'Relevance'
        },
        {
            value: "newest",
            name:"Newest"
        }
    ]
}
export default sortObj;