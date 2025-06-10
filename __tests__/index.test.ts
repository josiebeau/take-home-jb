import { DogAPI } from '../src/index';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const apiKey = process.env.API_KEY; 

const api = new DogAPI(apiKey || '', 'user12345');

test('fetch random image', async () => {
  const result = await api.getRandomImage();
  expect(result).toHaveProperty('url');
});

test('get breeds', async () => {
  const breeds = await api.getBreeds();
  expect(Array.isArray(breeds)).toBe(true);
});

test('vote on image', async () => {
  const image = await api.getRandomImage();
  const imageId = image.id;
  const value = 1; 

  await expect(api.voteOnImage(imageId, value)).resolves.toBeUndefined();
});

test('downvote on image', async () => {
  const image = await api.getRandomImage();
  const imageId = image.id;
  const value = 0; 

  await expect(api.voteOnImage(imageId, value)).resolves.toBeUndefined();
});

test('get votes', async () => {
  const votes = await api.getVotesForUser();
  expect(Array.isArray(votes)).toBe(true);
});