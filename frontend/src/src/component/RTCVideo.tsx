import { useRef, useEffect } from "react";

interface RTCVideoProps {
  mediaStream: MediaStream | undefined;
}

const RTCVideo = ({ mediaStream }: RTCVideoProps) => {
  const viewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!viewRef.current)
        return;
    viewRef.current.srcObject = mediaStream ? mediaStream : null;
  }, [mediaStream]);

  return <video ref={viewRef} autoPlay controls></video>;
};

export default RTCVideo;
