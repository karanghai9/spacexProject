import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import './PastLaunches.css';
import imgUnavailable from '../../../../Assets/img_unavailable.jpeg';
import Loader from '../../../../component/Loader/Loader';
import Zoom from 'react-reveal/Zoom';

const GET_MISSIONS = gql`
{
    launches(limit: 8) {
      details
      launch_year
      mission_name
      rocket {
        rocket_name
      }
      links {
        mission_patch_small
        wikipedia
      }
    }
  }
`;

export default function PastLaunches() {

    const[isDesktop,setDesktop] = useState(true);

    useEffect(() => {
        const deviceWidth = window.innerWidth;
        if(deviceWidth <= 1024) {
            setDesktop(false);
        }
    },[isDesktop]);

    const { loading, error, data } = useQuery(GET_MISSIONS);
    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;
    // console.log(data.launches);
  
    return (
        <>
            <h1 className="heading">OUR PAST LAUNCHES</h1>

            <div className="launch-grid">
                {data.launches.map((launch,key) => {
                    return (
                        <Zoom key={key}>
                            <div className="card">
                                <img className="missionImg" src={launch.links.mission_patch_small ? launch.links.mission_patch_small : imgUnavailable} alt="imgMission" />
                                <div>
                                    <div><b>Mission {key+1}</b><span>{launch.launch_year}</span><span>{launch.rocket.rocket_name}</span></div>
                                </div>
                                <div>
                                { isDesktop ?  <p>{launch.details? launch.details.substr(0,launch.details.lastIndexOf(' ',115)) : 'API Returns No Data'}</p> :  <p>{launch.details? launch.details.substr(0,launch.details.lastIndexOf(' ',30)) : 'API Returns No Data'}</p> }   
                                </div>
                                <div>
                                    {launch.links.wikipedia ? 
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkblue" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                        </svg>
                                        <a className="wikipedia-url" href={launch.links.wikipedia}> Go to Wikipedia Page</a>
                                    </span> 
                                    : "Wikipedia url not available" }
                                </div>
                            </div>
                        </Zoom>
                    );
                })}
            </div>
        </>
    );
}