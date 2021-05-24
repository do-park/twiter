import React, { useState } from 'react';
import { dbService } from 'fbase';

const Home = () => {
  const [tweet, setTweet] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('tweets').add({
      tweet: tweet,
      createdAt: Date.now(),
    }).then((docRef) => {
      console.log("Success");
      console.log(docRef);
    }).catch((error) => {
      console.log("something wrong");
      console.log(error);
    });
    setTweet('');
  };
  const onChange = (event) => {
    const { target: { value } } = event;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={tweet}
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120} />
        <input
          type="submit"
          value="Tweet" />
      </form>
    </div>
  );
};

export default Home;
