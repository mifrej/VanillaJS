const people = {
  mifrej: {
    name: 'Milosz',
    location: 'Berlin, Germany',
  },
  jufrej: {
    name: 'Jurek',
    location: 'Berlin, Germany',
  },
};

export default async function getUserDetails(handle) {
  return new Promise((res) => {
    setTimeout(() => {
      res(people[handle]);
    }, 1000);
  });
}
