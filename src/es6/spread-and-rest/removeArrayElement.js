export default () => {
  const comments = [
    {
      id: 209384,
      text: 'I love your dog!',
    },
    {
      id: 523423,
      text: 'Cuuute! 🐐',
    },
    {
      id: 632429,
      text: 'You are so dumb',
    },
    {
      id: 192834,
      text: 'Nice work on this wes!',
    },
  ];

  const id = 632429;
  const findIndex = comments.findIndex(comment => comment.id === id);
  const newArr = [...comments.slice(0, findIndex), ...comments.slice(findIndex + 1)];
  console.log(newArr);
};
