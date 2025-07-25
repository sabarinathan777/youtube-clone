import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, valueConvertor } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    const resp = await fetch(url);
    const json = await resp.json();
    setData(json.items || []);
  };

  fetchData();
}, [category]);


  return (
    <div className="feed">
      {data.map((obj, index) => (
        <Link to={`/video/${obj.snippet.categoryId}/${obj.id}`} className="card" key={index}>
          <img src={obj.snippet.thumbnails.medium.url} alt={obj.snippet.title} />
          <h2>{obj.snippet.title}</h2>
          <h3>{obj.snippet.channelTitle}</h3>
          <p>{valueConvertor(obj.statistics.viewCount)} views &bull; {moment(obj.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
