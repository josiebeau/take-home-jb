import { DogAPI } from './index'; 
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const apiKey = process.env.API_KEY; 
const dogApi = new DogAPI(apiKey || '', 'user12345');

// test all the API calls created in the dog api class 
async function run() {
  try {
    const dogImg = await dogApi.getRandomImage();
    console.log('Random dog image:', dogImg.url);
    console.log('Image ID:', dogImg.id);

    const breeds = await dogApi.getBreeds();
    console.log('First 5 breeds found:', breeds);

    await dogApi.voteOnImage(dogImg.id, 1);
    console.log('Voted successfully on image:', dogImg.id);

    await dogApi.voteOnImage(dogImg.id, 0);
    console.log('Downvote successfully on image:', dogImg.id);

    const votes = await dogApi.getVotesForUser();
    console.log('You voted for:', votes);

  } catch (error) {
    console.error('Something went wrong:', error);
  }
}

run();