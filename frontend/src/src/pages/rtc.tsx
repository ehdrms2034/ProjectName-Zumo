import { useState, useEffect} from "react";
import RTCVideo from '../component/RTCVideo';


const rtc = () => {
  const [localStream, setLocalStream] = useState<MediaStream>();
  
  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video: true})
    .then(stream=>{
      setLocalStream(stream);
    })
  },[]);

  return (
    <div>
      <RTCVideo
        mediaStream = {localStream}
      />
    </div>
  );
};

export default rtc;
