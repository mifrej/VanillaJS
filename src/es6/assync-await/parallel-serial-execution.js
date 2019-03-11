import getUserDetails from './get-user-details';

export default async () => {
  const handles = ['mifrej', 'jufrej'];
  for (const handle of handles) {
    // eslint-disable-next-line no-await-in-loop
    const item = await getUserDetails(handle);
    console.log(`
      Name: ${item.name}
      Location: ${item.location}
    `);
  }
};
