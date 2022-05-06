// describe('test asynchronous call', () => {
//     it('should be able to handle getData', () => {
//       expect.hasAssertions();
//       getData({ url: '/newsfeed' }).then(data => expect(data).toBeDefined());
//     });
//   });


describe('test getData', () => {
    it('should be able to handle success call', async () => {
      expect.hasAssertions();
      const data = await getData({ url: '/newsfeed' });
      expect(data).toBeDefined();
    });
    it('should be able to handle failed call', async () => {
      expect.hasAssertions();
      try {
        await getData({ url: '/newsfeedx' });
      } catch (e) {
        expect(e.message).toMatch('Unknown case');
      }
    });
  });