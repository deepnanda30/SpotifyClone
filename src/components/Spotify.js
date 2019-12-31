import React, { useState} from 'react';
import spotifyy from './spotifyy.jpg';

const token = "BQAMeoM4SM04LwGaByCstTr9MsWVSz2S7sleHVviXstOv-9QEL4ULWbsgrgC8ZNbfd6ijRulNqUq7TSh21J-kTn5QumhvAhttD4WqilfecUQsXQtqPwXA_SCeg0s_giUhCVjK2jRcIK5M5tXGHBDkPkEJYI468M";
function Spotify(){
const [artists,setArtists] = useState([]);
const [playlists,setPlaylists] = useState([]);
const [tracks,setTracks] = useState([]);
const [search_input,setInput] = useState('');


function handler(e){
    e.preventDefault();
    search();
}

 function search(){
    let url =`https://api.spotify.com/v1/search?q=${search_input}&type=artist,playlist,track&limit=6`;
    fetch(url,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }
    })
    .then(res =>res.json())
    .then(data => {
        setArtists(data.artists.items);
        setTracks(data.tracks.items);
        setPlaylists(data.playlists.items);
        console.log(data);
    })
    }
     return(
         <div className="container">
             <h1><i className="fa fa-headphones"></i> SPOTIFY <i className="fa fa-music"></i></h1>
             <img className="spotify" src={spotifyy} />
            <div className="row">
                <div className=" mx-auto ">    
             <form  onSubmit={handler}>
                 <div className="form-group py-1">
                  <input type="text" className="form-control" value={search_input} placeholder="Enter your artist here" onChange={e => setInput(e.target.value)} /> 
                  </div>
                  <button className="btn btn-primary "> Submit </button>
             </form>
             </div>
             </div>
             <div className="row py-5">
             <div className="col-lg-4 mx-auto">  
             <h2>ARTISTS</h2>               
             {artists.map((artist,key) => (
                 <div key={key}>
                      <h4>{artist.name}</h4>
                    <img className ="pics my-1" src={artist.images[0].url} />
                 </div>
             ))}
             </div>
             <div className="col-lg-4 mx-auto "> 
             <h2>TRACKS</h2>                
             {tracks.map((track,key) => (
                 <div key={key} className="my-3">
                      <h4>{track.name}</h4>
                    <img className ="pics" src={track.album.images[0].url} />
                 </div>
             ))}
             </div>
             <div className="col-lg-4 mx-auto">
                 <h2>PLAYLISTS</h2>                 
             {playlists.map((playlist,key) => (
                 <div key={key}>
                      <h4>{playlist.name}</h4>
                    <img className ="pics" src={playlist.images[0].url} />
                 </div>
             ))}
             </div>
             </div>
         </div>
    );    
}

export default Spotify;