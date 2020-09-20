import { socket } from "../../../index";
import SOCKET_TYPE from "../../../constants/socket-type";

export const drawState = {
  isDraw: false,
  color: "#FF0000",
  slideId: 0,
};

const sketch = (s: any) => {
  s.setup = () => {
    const content = document.getElementById("Slide__content");
    if (!content) return;

    const cv = s.createCanvas(content.clientWidth, content.clientHeight);
    cv.id("Slide__canvas");
    cv.parent("Slide__content");

    socket.on(SOCKET_TYPE.DRAW, (data: Record<string, unknown>) => {
      s.stroke(data.color);
      s.strokeWeight(4);
      s.line(data.x, data.y, data.px, data.py);
    });

    socket.on(SOCKET_TYPE.IMAGE_CHANGE, () => {
      s.clear();
    });

    const eraseButton = document.getElementById("Slide__erase");
    if (!eraseButton) return;
    eraseButton.addEventListener("click", () => {
      s.clear();
    });
  };

  s.mouseDragged = (e: any) => {
    if (s.mouseButton !== "left") return;

    s.noFill();

    if (drawState.isDraw) {
      s.stroke(drawState.color);
      s.strokeWeight(4);
      s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
      sendDrawDataToServer(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
    }
  };

  const sendDrawDataToServer = (
    x: number,
    y: number,
    pX: number,
    pY: number
  ) => {
    const data = {
      slideId: drawState.slideId,
      x: Math.round(x),
      y: Math.round(y),
      px: Math.round(pX),
      py: Math.round(pY),
      color: drawState.color,
    };
    socket.emit(SOCKET_TYPE.DRAW, data);
  };
};

export default sketch;
