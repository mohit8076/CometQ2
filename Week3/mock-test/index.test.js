// const getFirstAlbumTitle = require('./index');

// it('returns the title of the first album', async () => {
//   const title = await getFirstAlbumTitle();  
//   expect(title).toEqual('quidem molestiae enim');  
// });

const getFirstAlbumTitle = require('./index');
const axios = require('axios');

jest.mock('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 2,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual('My First Album');
});
jest.resetAllMocks();