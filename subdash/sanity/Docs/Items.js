// items.js
export default {
  name: 'item',
  title: 'Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};