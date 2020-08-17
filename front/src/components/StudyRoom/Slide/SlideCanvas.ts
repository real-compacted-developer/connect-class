import { socket } from "../../../index";

const sketch = (s: any) => {
  let color = "#FFFFFF";

  s.setup = () => {
    const cv = s.createCanvas(1000, 800);
    cv.id("Slide__canvasTest");

    socket.on("draw", (data: Record<string, any>) => {
      s.stroke(data.color);
      s.strokeWeight(data.strokeWidth);
      s.line(data.x, data.y, data.px, data.py);
    });
  };

  s.mouseDragged = () => {
    s.stroke(color);
    s.strokeWeight(4);
    s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
    sendDrawDataToServer(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
  };

  const sendDrawDataToServer = (
    x: number,
    y: number,
    pX: number,
    pY: number
  ) => {
    const data = {
      slideId: 1, // TODO: 실제 slideId로 넣어야함
      x: x,
      y: y,
      px: pX,
      py: pY,
      color,
      strokeWidth: 4,
    };
    socket.emit("draw", data);
  };
};

export default sketch;
