import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import './SearchResults.css';

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(searchTerm)}&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error('Search error:', err);
        setVideos([]);
      }
      setLoading(false);
    };

    fetchResults();
  }, [searchTerm]);

  if (loading) return <div className="search-results">Loading...</div>;

  return (
    <div className="search-results">
      {videos.map((video) => (
        <Link
          to={`/video/${video.snippet.categoryId || '0'}/${video.id.videoId}`}
          className="video-card"
          key={video.id.videoId}
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <div>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.channelTitle}</p>
            <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
