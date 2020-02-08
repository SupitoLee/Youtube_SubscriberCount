import React, { useState, useEffect, Fragment } from "react";
import config from "./config.js";
import numeral from "numeral";

const Youtubecounter = () => {
  const [subscriberCount, setSubscriberCount] = useState();

  useEffect(() => {
    const { api_key, channel_id } = config;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
    fetch(apiCall)
      .then(result => result.json())
      .then(data => {
        const count = numeral(data.items[0].statistics.subscriberCount).format(
          "0,0"
        );
        setSubscriberCount(count);
      });
  }, []);

  return <Fragment>{subscriberCount}</Fragment>;
};

export default Youtubecounter;
