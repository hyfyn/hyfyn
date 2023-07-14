import { useEffect, useRef, useState, MouseEvent, ChangeEvent } from "react";
import { Controls, Canvas as StyledCanvas } from "./styles/canvas";
import { Section } from "app/components/atoms";
function Canvas() {
  // let [direction, setDirection] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLSelectElement>(null);
  const lineWidthRef = useRef<HTMLInputElement>(null);
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const [clearCanvas, setClearCanvas] = useState(false);
  let { current: lineWidth } = useRef(10);
  let { current: isDrawing } = useRef(false);
  let { current: lastX } = useRef(0);
  let { current: lastY } = useRef(0);
  let ctx: CanvasRenderingContext2D;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = sectionRef.current;

    if (canvas && container) {
      ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.width = container.offsetWidth;
      canvas.height = window.innerHeight - 200;
      ctx.strokeStyle = "#FFF";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = +lineWidth;
    }
  }, [clearCanvas]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
  };

  const handleMouseDown = (e: MouseEvent) => {
    isDrawing = true;
    console.log(e);
    [lastX, lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
  };

  const handleMouseUp = () => {
    isDrawing = false;
  };

  const setLineWidth = (value: string) => {
    lineWidthRef.current ? (lineWidthRef.current.value = value) : null;
  };

  const handleLineSize = (e: ChangeEvent<HTMLInputElement>) => {
    setLineWidth(e.target.value);
    lineWidth = +e.target.value;
    ctx.lineWidth = lineWidth;
  };

  const handleClearCanvas = () => {
    setLineWidth("10");
    colorPickerRef.current ? (colorPickerRef.current.value = "#FFFFFF") : null;
    setClearCanvas(!clearCanvas);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    ctx.strokeStyle = e.target.value;
  };

  return (
    <Section ref={sectionRef}>
      <Controls>
        <label htmlFor="lineSize">Line Size</label>
        <input
          ref={lineWidthRef}
          name="lineSize"
          type="range"
          onChange={handleLineSize}
          defaultValue={lineWidth}
        />
        <label htmlFor="colorPicker">Color Picker</label>
        <input
          ref={colorPickerRef}
          type="color"
          name="colorPicker"
          defaultValue="#FFFFFF"
          onChange={handleColorChange}
        />
        <button onClick={handleClearCanvas}>Reset Canvas</button>
      </Controls>
      <StyledCanvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseUp}
        height={100}
        width={100}
      ></StyledCanvas>
    </Section>
  );
}

export default Canvas;
