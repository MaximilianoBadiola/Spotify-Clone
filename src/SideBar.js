import React from 'react'
import './SideBar.css'
import SidebarOption from './SidebarOption'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from './DataLayer';

function SideBar() {

    const [{playlists}, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo" 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt="" 
            />
        
            <SidebarOption Icon ={HomeIcon} title="Home"/>
            <SidebarOption Icon ={SearchIcon} title="Search"/>
            <SidebarOption Icon ={LibraryMusicIcon} title="Your Library"/>
            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/>
            ))}
        </div>
    )
}

export default SideBar
