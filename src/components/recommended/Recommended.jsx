import React, { useEffect, useState } from 'react';
import './Recommnended.css';
import { API_KEY, valueConvertor } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=30&key=${API_KEY}`;
      const resp = await fetch(url);
      const json = await resp.json();
      setList(json.items || []);
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className='recommended'>
      {list.map((obj, index) => (
       <Link to={`/video/${obj?.snippet?.categoryId}/${obj.id}`} className="side-video-list" key={index}>
          <img src={obj.snippet?.thumbnails?.medium?.url} alt={obj.snippet?.title} />
          <div className='video-info'>
            <h4>{obj.snippet?.title}</h4>
            <p>{obj.snippet?.channelTitle}</p>
            <p>{ valueConvertor(obj.statistics?.viewCount)} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
