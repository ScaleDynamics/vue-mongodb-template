const { MongoClient } = require('mongodb');

// connection URI
const URI = 'mongodb+srv://test:test@movies-scqxj.gcp.mongodb.net/';

const fetchMovies = async (search) => {
  // create a new MongoClient
  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    return await client
      .db('sample_mflix')
      .collection('movies')
      .find({ poster: { $exists: true }, title: { $regex: search, $options: 'i' } })
      .project({ _id: 0, title: 1, year: 1, plot: 1, poster: 1 })
      .sort({ year: -1 })
      .limit(50)
      .toArray();
  } catch (error) {
    throw new Error(`Database connection failed (${error.message})`);
  } finally {
    await client.close();
  }
};

module.exports = { fetchMovies };
