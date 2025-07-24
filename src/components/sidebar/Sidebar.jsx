import React from 'react';
import './Sidebar.css';

import homeIcon from '@/assets/home.png';
import gameIcon from '@/assets/game_icon.png';
import automobilesIcon from '@/assets/automobiles.png';
import sportsIcon from '@/assets/sports.png';
import entertainmentIcon from '@/assets/entertainment.png';
import technologyIcon from '@/assets/tech.png';
import musicIcon from '@/assets/music.png';
import blogsIcon from '@/assets/blogs.png';
import newsIcon from '@/assets/news.png';
import userIcon from '@/assets/profile.png';
import simonIcon from '@/assets/simon.png';
import tomIcon from '@/assets/tom.png';
import meganIcon from '@/assets/megan.png';
import cameronIcon from '@/assets/cameron.png';

const sidebarItems = [
  { icon: homeIcon, label: 'Home' },
  { icon: gameIcon, label: 'Gaming' },
  { icon: automobilesIcon, label: 'Automobiles' },
  { icon: sportsIcon, label: 'Sports' },
  { icon: entertainmentIcon, label: 'Entertainment' },
  { icon: technologyIcon, label: 'Technology' },
  { icon: musicIcon, label: 'Music' },
  { icon: blogsIcon, label: 'Blogs' },
  { icon: newsIcon, label: 'News' }
];

const subscribedUsers = [
  { icon: userIcon, label: 'Jack' },
  { icon: simonIcon, label: 'Simon' },
  { icon: tomIcon, label: 'Tom' },
  { icon: meganIcon, label: 'Megan' },
  { icon: cameronIcon, label: 'Cameron' }
];


const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-link">
        {sidebarItems.map((item, index) => (
          <div className="side-link" key={index}>
            <img src={item.icon} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        {subscribedUsers.map((user, index) => (
          <div className="side-link" key={index}>
            <img src={user.icon} alt={user.label} />
            <p>{user.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Sidebar;
