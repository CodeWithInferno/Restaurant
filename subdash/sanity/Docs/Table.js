// schema.js
export default {
  name: 'table',
  title: 'Table',
  type: 'document',
  fields: [
    {
      name: 'tables',
      title: 'Tables',
      type: 'string',
      initialValue: () => `Table 1`, // This will set the initial value to "Table " followed by the current timestamp
    },
    {
      name: 'order',
      title: 'Order',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'tables',
        maxLength: 96,
      },
    },
  ],
};