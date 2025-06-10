# Dog API

https://thedogapi.com/

## Setup

Create a `.env` file in the project root and add your API key:

```
API_KEY=your_dog_api_key_here
```

Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

## Example API Calls 

Use the built-in example script to see the library in action:

``` bash 
npx ts-node example.ts 
``` 

## Test API Calls 

Unit tests are written using Jest and `axios-mock-adapter`:

```bash
npm run test
```
---

## Usage

```ts
import { DogAPI } from '../src/index';
```

## API Methods  

| Method                  | Description                                      |
|-------------------------|--------------------------------------------------|
| `getRandomImage()`      | Fetch a random dog image                         |
| `getBreeds()`           | Get the first 5 dog breeds                       |
| `voteOnImage(id, value)`| Submit a vote on an image (1 = upvote, 0 = down) |
| `getVotesForUser()`     | Get user votes                                   | 
