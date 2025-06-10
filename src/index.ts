import axios, { AxiosInstance } from 'axios';

export class DogAPI {
  private client: AxiosInstance;
  private subId: string;

  // creates the auth for the endpoint 
  constructor(apiKey: string, subId: string) {
    this.client = axios.create({
      baseURL: 'https://api.thedogapi.com/v1',
      headers: {
        'x-api-key': apiKey
      }
    });
    this.subId = subId;
  }


  // get a random image and return the first img in the array 
  async getRandomImage() {
    try {
      const response = await this.client.get('/images/search');
      return response.data[0];
    } catch (error) {
      throw new Error('Failed to fetch');
    }
  }

  // get the first 5 breeds 
  async getBreeds() {
    try {
      const response = await this.client.get(`/breeds?limit=5`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get breeds');
    }
  }

  // vote for the random image that was grabbed above
  async voteOnImage(imageId: string, value: number) {
    try {
      await this.client.post('/votes', {
        image_id: imageId,
        sub_id: this.subId,
        value
      })
    } catch (error: any) {
      console.log(error.response, error.message)
      throw new Error('Failed to vote on image');
    }
  }

  async getVotesForUser() {
    try {
      const response = await this.client.get(`/votes?sub_id=${this.subId}`);
      return response.data;
    } catch (error: any) {
      console.log(error.response, error.message)
      throw new Error('Failed to get votes on image');
    }
  }

}