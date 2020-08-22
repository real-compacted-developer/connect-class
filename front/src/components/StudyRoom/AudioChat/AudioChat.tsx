import React, { useState, useEffect } from "react";
import SimplePeer from "simple-peer";
import { socket } from "../../../index";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  z-index: 3000;
`;

const AudioChat: React.FC = () => {
  const [myAudioStream, setMyAudioStream] = useState<any>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bindEvents = (p: any) => {
    p.on("error", (err: Error) => {
      console.log(err);
    });

    p.on("signal", (data: any) => {
      socket?.emit("createOffer", data);
    });

    p.on("stream", (stream: any) => {
      const audioTag: HTMLAudioElement | null = window.document.querySelector(
        "#audio-tag"
      );
      if (audioTag !== null) {
        audioTag.srcObject = stream;
      }
    });
  };

  useEffect(() => {
    socket?.on("shareAudioModal", async (name: any) => {
      // eslint-disable-next-line no-restricted-globals
      const success = confirm(`${name} 님이 오디오 채팅을 시작하길 원합니다.`);

      if (!success) return;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: false,
          audio: true,
        });

        const peer = new SimplePeer({
          initiator: true,
          stream,
          config: {
            iceServers: [
              { url: "stun:stun1.l.google.com:19302" },
              {
                url: "turn:numb.viagenie.ca",
                credential: "muazkh",
                username: "webrtc@live.com",
              },
            ],
          },
        });

        bindEvents(peer);
      } catch (e) {
        console.log(e.message);
      }
    });

    socket?.on("transmitOffer", (data: any) => {
      console.log("receiving Offer", data);

      const peer = new SimplePeer({
        initiator: false,
        stream: myAudioStream,
        config: {
          iceServers: [
            { url: "stun:stun1.l.google.com:19302" },
            {
              url: "turn:numb.viagenie.ca",
              credential: "muazkh",
              username: "webrtc@live.com",
            },
          ],
        },
      });
      bindEvents(peer);

      peer.signal(data);
    });
  }, []);

  const startAudioChat = async () => {
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      setMyAudioStream(userMedia);
      socket?.emit("askAudio");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Wrapper>
      <button onClick={startAudioChat}>Audio Chat</button>
      <audio id="audio-tag" autoPlay playsInline></audio>
    </Wrapper>
  );
};

export default AudioChat;
