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
  { icon: homeIcon, label: 'Home', id: 0 },
  { icon: gameIcon, label: 'Gaming', id: 20 },
  { icon: automobilesIcon, label: 'Automobiles', id: 2 },
  { icon: sportsIcon, label: 'Sports', id: 17 },
  { icon: entertainmentIcon, label: 'Entertainment', id: 24 },
  { icon: technologyIcon, label: 'Technology', id: 28 },
  { icon: musicIcon, label: 'Music', id: 10 },
  { icon: blogsIcon, label: 'Blogs', id: 22 },
  { icon: newsIcon, label: 'News', id: 25 }
];

const subscribedUsers = [
  { icon: userIcon, label: 'Jack' },
  { icon: simonIcon, label: 'Simon' },
  { icon: tomIcon, label: 'Tom' },
  { icon: meganIcon, label: 'Megan' },
  { icon: cameronIcon, label: 'Cameron' }
];

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-link">
        {sidebarItems.map((item, index) => (
          <div
            className={`side-link ${category === item.id ? 'active' : ''}`}
            key={index}
            onClick={() => setCategory(item.id)}
          >
            <img src={item.icon} alt={item.label} />
            {sidebar && <p>{item.label}</p>}
          </div>
        ))}
      </div>
      <hr />
      <div className="subscribed-list">
        {sidebar && <h3>Subscribed</h3>}
        {subscribedUsers.map((user, index) => (
          <div className="side-link" key={index}>
            <img src={user.icon} alt={user.label} />
            {sidebar && <p>{user.label}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
