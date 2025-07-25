import React from 'react'
import './Recommnended.css'
import thumbnail1 from "@/assets/thumbnail1.png";
import thumbnail2 from "@/assets/thumbnail2.png";
import thumbnail3 from "@/assets/thumbnail3.png";
import thumbnail4 from "@/assets/thumbnail4.png";
import thumbnail5 from "@/assets/thumbnail5.png";
import thumbnail6 from "@/assets/thumbnail6.png";
import thumbnail7 from "@/assets/thumbnail7.png";
import thumbnail8 from "@/assets/thumbnail8.png";

const list = [
  { thumbnail: thumbnail1, title: 'Best Channel Ever', channel: 'CreatorX', views: '15K views' },
  { thumbnail: thumbnail2, title: 'How to Code React', channel: 'CodeLab', views: '22K views' },
  { thumbnail: thumbnail3, title: 'React vs Vue', channel: 'Techie', views: '18K views' },
  { thumbnail: thumbnail4, title: 'Top 10 Programming Tips', channel: 'DevWorld', views: '30K views' },
  { thumbnail: thumbnail5, title: 'Travel Vlog in Japan', channel: 'Wanderlust', views: '45K views' },
  { thumbnail: thumbnail6, title: 'How to Cook Pasta', channel: 'ChefZone', views: '12K views' },
  { thumbnail: thumbnail7, title: 'Fitness at Home', channel: 'FitLife', views: '27K views' },
  { thumbnail: thumbnail8, title: 'Gaming Highlights', channel: 'PlayPro', views: '50K views' }

];

const Recommended = () => {
  return (
    <div className='recommended'>
        {list.map((obj, index) => (
        <div className="side-video-list" key={index}>
          <img src={obj.thumbnail} alt={obj.title} />
          <div className='video-info'>
          <h4>{obj.title}</h4>
          <p>{obj.channel}</p>
          <p>{obj.views}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommended
