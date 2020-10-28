import React, { useEffect } from "react";
import SimplePeer from "simple-peer";
import styled from "styled-components";
import useSocket from "../../../hooks/useSocket";

import microphoneImage from "./microphone.svg";

const Wrapper = styled.div``;

const Button = styled.button`
  position: absolute;
  right: 80px;
  top: 10px;

  width: 60px;
  height: 60px;
  padding: 10px;
  border: none;
  background-color: white;

  background-image: url(${microphoneImage});
  background-repeat: no-repeat;
  background-size: 30px 30px;
  background-position: center center;

  border-radius: 20px;

  transition: background-color 0.5s ease;

  :hover {
    background-color: #ccc;
  }

  :focus {
    outline: none;
  }
`;

let peer: any = undefined;
let myAudioStream: any = undefined;

const AudioChat: React.FC = () => {
  const socket = useSocket();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bindEvents = (p: any) => {
    p.on("error", (err: Error) => {
      console.log(err);
    });

    p.on("signal", (data: any) => {
      socket?.emit("createOffer", data);
    });

    p.on("stream", (stream: any) => {
      console.log("set stream");
      const audioTag: HTMLAudioElement | null = window.document.querySelector(
        "#audio-tag"
      );
      console.log(audioTag);
      if (audioTag !== null) {
        console.log("set stream to audioTag");
        audioTag.srcObject = stream;
      }
    });
  };

  useEffect(() => {
    socket?.on("shareAudioModal", async (name: any) => {
      console.log("shareAudioModal");
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: false,
          audio: true,
        });

        peer = new SimplePeer({
          initiator: true,
          stream,
          config: {
            iceServers: [
              { urls: "stun:stun.l.google.com:19302" },
              { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
              {
                urls: "turn:numb.viagenie.ca",
                credential: "hiragana",
                username: "mornirmornir@hotmail.com",
              },
            ],
          },
        });
        bindEvents(peer);
      } catch (e) {
        console.log(e.message);
      }
    });

    socket?.on("transmitOffer", async (data: any) => {
      console.log("receiving Offer", data);

      if (peer === undefined) {
        peer = new SimplePeer({
          initiator: false,
          stream: myAudioStream,
          config: {
            iceServers: [
              {
                urls: "stun:stun.l.google.com:19302",
              },
              {
                urls: "stun:global.stun.twilio.com:3478?transport=udp",
              },
              {
                urls: "turn:numb.viagenie.ca",
                credential: "hiragana",
                username: "mornirmornir@hotmail.com",
              },
            ],
          },
        });
        bindEvents(peer);
      }
      peer.signal(data);
    });
  }, [socket]);

  const startAudioChat = async () => {
    try {
      socket?.emit("askAudio");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Wrapper>
      <Button onClick={startAudioChat} />
      <audio id="audio-tag" autoPlay playsInline></audio>
    </Wrapper>
  );
};

export default AudioChat;
