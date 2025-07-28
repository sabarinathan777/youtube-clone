import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from "@/assets/like.png";
import dislike from "@/assets/dislike.png";
import share from "@/assets/share.png";
import save from "@/assets/save.png";
import user_profile from "@/assets/user_profile.jpg";
import { API_KEY, valueConvertor } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const fetchVideoData = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const resp = await fetch(url);
      const json = await resp.json();
      const videoInfo = json.items[0];
      setApiData(videoInfo);

      const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${videoInfo.snippet.channelId}&key=${API_KEY}`;
      const channelResp = await fetch(channelUrl);
      const channelJson = await channelResp.json();
      setChannelData(channelJson.items[0]);

      const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=40&key=${API_KEY}`;
    const commentResp = await fetch(commentUrl);
    const commentJson = await commentResp.json();
    setComments(commentJson.items);
    };

    fetchVideoData();
  }, [videoId]);

  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData?.snippet?.title || 'Title'}</h3>

      <div className="play-video-info">
        <p>
          {valueConvertor(apiData?.statistics?.viewCount)} views &bull;{" "}
          {moment(apiData?.snippet?.publishedAt).fromNow()}
        </p>
        <div>
          <span><img src={like} alt="like" /> {valueConvertor(apiData?.statistics?.likeCount)}</span>
          <span><img src={dislike} alt="dislike" /> Dislike</span>
          <span><img src={share} alt="share" /> Share</span>
          <span><img src={save} alt="save" /> Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.default?.url} alt="Channel Logo" />
        <div>
          <p>{channelData?.snippet?.title}</p>
          <span>{valueConvertor(channelData?.statistics?.subscriberCount)} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="video-description">
  <p>{apiData?.snippet?.description.slice(0, 250)}</p>
  <hr />
  <h4>{valueConvertor(apiData?.statistics?.commentCount)} Comments</h4>

  {comments?.map((commentItem) => {
    const comment = commentItem.snippet.topLevelComment.snippet;
    return (
      <div className="comment" key={commentItem.id}>
        <img src={comment.authorProfileImageUrl || user_profile} alt="User Profile" />
        <div>
          <h3>{comment.authorDisplayName} <span>{moment(comment.publishedAt).fromNow()}</span></h3>
          <p>{comment.textDisplay}</p>
          <div className="comment-action">
            <img src={like} alt="like" />
            <span>{valueConvertor(comment.likeCount)}</span>
            <img src={dislike} alt="dislike" />
          </div>
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
};

export default PlayVideo;
