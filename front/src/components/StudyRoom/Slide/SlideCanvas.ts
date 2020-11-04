import SOCKET_TYPE from "../../../constants/socket-type";

export const drawState = {
  isDraw: false,
  color: "#000000",
  slideId: 0,
};

const sketch = (
  roomId: string,
  userId: string,
  socket: SocketIOClient.Socket
) => {
  return (s: any) => {
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

      socket.on(SOCKET_TYPE.ERASE, (data: Record<string, unknown>) => {
        if (data.slideId === drawState.slideId) s.clear();
      });

      const eraseButton = document.getElementById("Slide__erase");
      if (!eraseButton) return;
      eraseButton.addEventListener("click", () => {
        s.clear();
        socket.emit(SOCKET_TYPE.ERASE, {
          roomId,
          slideId: drawState.slideId,
          userId,
        });
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
        roomId,
        slideId: drawState.slideId,
        userId,
        x: Math.round(x),
        y: Math.round(y),
        px: Math.round(pX),
        py: Math.round(pY),
        color: drawState.color,
      };
      socket.emit(SOCKET_TYPE.DRAW, data);
    };
  };
};

export default sketch;
