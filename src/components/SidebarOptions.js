import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";
import RewardIcon from './Images/Reward.png'
import LeaderIcon from './Images/Leader.png'
import FollowingIcon from './Images/Following.png'
import SavedIcon from './Images/Saved.png'
import { useNavigate } from 'react-router-dom';

function SidebarOptions() {
  const navigate = useNavigate();
  return (
    <div className="sidebarOptions" style={{ backgroundColor: 'lightpurple' }}>
      <div className="sidebarOption" onClick={() => navigate('/') }>
        <img className="h-[30px]" src={FollowingIcon} />
        <h3>Following</h3>
      </div>

      <div className="sidebarOption" onClick={() => navigate('/leaderboard') }>
        <img className="h-[30px]" src={LeaderIcon} />
        <h3>LeaderBoard</h3>
      </div>
      
      <div className="sidebarOption" onClick={() => navigate('/rewards') }>
        <img className="h-[30px]" src={RewardIcon} alt="Rewards Icon" />
        <h3>Your Rewards</h3>
      </div>
      
      <div className="sidebarOption" onClick={() => navigate('/saved') }>
        <img className="h-[30px]" src={SavedIcon} />
        <h3> Saved Post</h3>
      </div>
    </div>
  );
}

export default SidebarOptions;