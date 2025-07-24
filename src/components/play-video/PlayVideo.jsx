import React from 'react'
import './PlayVideo.css'
import video1 from "@/assets/video.mp4"
import like from "@/assets/like.png"
import dislike from "@/assets/dislike.png"
import share from "@/assets/share.png"
import save from "@/assets/save.png"
import profile from "@/assets/profile.png"
import user_profile from "@/assets/user_profile.jpg"

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted />
      <h3>Relaxing Nature Sounds for Healing & Meditation</h3>

      <div className="play-video-info">
        <p>135 views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="like" /> 125</span>
          <span><img src={dislike} alt="dislike" /> 2</span>
          <span><img src={share} alt="share" /> Share</span>
          <span><img src={save} alt="save" /> Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={profile} alt="Channel Logo" />
        <div>
          <p>Healing Videos</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="video-description">
        <p>Take a moment every day to breathe, relax, and reset. </p>
        <p>Don't forget to subscribe for more healing content. ✨</p>
      <hr />
      <h4>130 Comments</h4>
      <div className="comment">
        <img src={user_profile} alt="User Profile" />
        <div>
          <h3>Jackson <span>1 day ago</span></h3>
          <p>An excellent work. So soothing!</p>
          <div className="comment-action">
            <img src={like} alt="like" />
            <span>100</span>
            <img src={dislike} alt="dislike" />
          </div>
        </div>
      </div>
      <div className="comment">
        <img src={user_profile} alt="User Profile" />
        <div>
          <h3>Emily <span>3 hours ago</span></h3>
          <p>This helped me sleep last night. Thank you 🙏</p>
          <div className="comment-action">
            <img src={like} alt="like" />
            <span>85</span>
            <img src={dislike} alt="dislike" />
          </div>
        </div>
      </div>
      <div className="comment">
        <img src={user_profile} alt="User Profile" />
        <div>
          <h3>Leo <span>6 hours ago</span></h3>
          <p>I come back to this video every day. So peaceful.</p>
          <div className="comment-action">
            <img src={like} alt="like" />
            <span>73</span>
            <img src={dislike} alt="dislike" />
          </div>
        </div>
      </div>
      <div className="comment">
        <img src={user_profile} alt="User Profile" />
        <div>
          <h3>Sophia <span>10 hours ago</span></h3>
          <p>Just subscribed. Love your channel ❤️</p>
          <div className="comment-action">
            <img src={like} alt="like" />
            <span>64</span>
            <img src={dislike} alt="dislike" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PlayVideo
