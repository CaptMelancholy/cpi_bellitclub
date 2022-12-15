import AuCard from '../Components/AuCard.js';
import AuGallery from '../Components/AuGallery.js';
import TimeLine from '../Components/TimeLine.js';
import YoutubeEmbed from '../Components/YoutubeEmbed.js';
import Home from '../Components/GoogleMap.js';
import initialDetails from '../Data/initialDetails.js';
import { useParams } from 'react-router';


function Person() {
    
    const params = useParams();
    const PERSON_NUMBER = 5;
    for(var i = 0; i < PERSON_NUMBER; i++) {
        if(params.id === initialDetails[i].id) 
            var data = initialDetails[i];
    }

    return (
        <>
            <AuCard element={data.info} />
            <TimeLine element={data.biografy} />
            <AuGallery element={data.info} />
            <YoutubeEmbed embedId={data.info.video} />
            <Home coord={data.info} />
        </>
    )
};

export default Person;