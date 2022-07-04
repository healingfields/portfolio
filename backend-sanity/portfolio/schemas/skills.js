export default {
    name: 'skills',
    type: 'document',
    title: 'Skills',
    fields : [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot:true,
            }
        }
    ]
}