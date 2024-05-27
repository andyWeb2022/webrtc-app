import { Inter } from "next/font/google";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const localStream: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const getLocalStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    if (localStream.current) {
      localStream.current.srcObject = stream;
    }
  };
  useEffect(() => {
    getLocalStream();
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <div>
          <video ref={localStream} muted autoPlay playsInline></video>
        </div>
      </div>
    </main>
  );
}
