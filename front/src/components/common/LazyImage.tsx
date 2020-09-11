import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  width: string;
  height: string;
  imageURL: string;
};

let observer: IntersectionObserver | null = null;

function onIntersection(
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver
): void {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent("loadImage"));
    }
  });
}

const Image = styled.div<Props>`
  width: ${(props): string => props.width};
  height: ${(props): string => props.height};

  background-image: url("${(props): string => props.imageURL}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export default function LazyImage(props: Props): JSX.Element {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    function loadImage(): void {
      setIsLoad(true);
    }

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener("loadImage", loadImage);
    return (): void => {
      imgEl && imgEl.removeEventListener("loadImage", loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 0.5, // 절반이 보일 때 로딩함
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  return (
    <Image
      width={props.width}
      height={props.height}
      ref={imgRef}
      imageURL={isLoad ? `${props.imageURL}` : ""}
    />
  );
}
