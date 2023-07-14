import { Children, MouseEventHandler, useEffect, useRef } from "react";

function drawX(
  ctx: CanvasRenderingContext2D,
  xAxisStart: number,
  xAxisEnd: number,
  y: number
) {
  return new Promise((resolve) => {
    const moveLeft = xAxisEnd < xAxisStart;

    if (xAxisStart === xAxisEnd) {
      return resolve("xDone");
    }

    ctx.lineTo(xAxisStart, y);
    ctx.stroke();

    const xStart = moveLeft ? xAxisStart - 1 : xAxisStart + 1;
    window.requestAnimationFrame(async () => {
      await drawX(ctx, xStart, xAxisEnd, y);
      resolve("xIncrementDone");
    });
  });
}

function drawY(
  ctx: CanvasRenderingContext2D,
  yAxisStart: number,
  x: number,
  yAxisEnd: number
) {
  return new Promise((resolve) => {
    const moveUp = yAxisStart >= yAxisEnd;

    if (yAxisStart === yAxisEnd) {
      return resolve("yDone");
    }

    ctx.lineTo(x, yAxisStart);
    ctx.stroke();

    const start = moveUp ? yAxisStart - 1 : yAxisStart + 1;
    window.requestAnimationFrame(async () => {
      await drawY(ctx, start, x, yAxisEnd);
      resolve("yIncrementDone");
    });
  });
}

function drawDiagonal(
  ctx: CanvasRenderingContext2D,
  xAxisStart: number,
  yAxisStart: number,
  xAxisEnd: number,
  yAxisEnd: number
): Promise<any> {
  const moveUpY = yAxisStart > yAxisEnd;
  const moveUpX = xAxisStart > xAxisEnd;
  return new Promise((resolve) => {
    if (yAxisStart === yAxisEnd) {
      return resolve("diagonalDone");
    }
    ctx.lineTo(xAxisStart, yAxisStart);
    ctx.stroke();
    const yStart = moveUpY ? yAxisStart - 1 : yAxisStart + 1;
    const xStart = moveUpX ? xAxisStart - 1 : xAxisStart + 1;
    window.requestAnimationFrame(async () => {
      await drawDiagonal(ctx, xStart, yStart, xAxisEnd, yAxisEnd);
      resolve("DiagonalDone");
    });
  });
}
const InteractiveLogo = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLCanvasElement>;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  async function drawLogo(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.restore();
      ctx.clearRect(0, 0, 50, 50);
      ctx.strokeStyle = "rgb(237, 214, 150)";
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.save();
      ctx.translate(9, 2);
      ctx.beginPath();
      ctx.moveTo(1, 1);
      await drawX(ctx, 1, 15, 1);
      await drawY(ctx, 1, 15, 25);
      await drawDiagonal(ctx, 15, 25, 29, 9);
      await drawY(ctx, 12, 30, 48);
      await drawX(ctx, 31, 15, 47);
      await drawY(ctx, 46, 15, 23);
      await drawDiagonal(ctx, 15, 24, 1, 39);
      await drawY(ctx, 34, 1, 0);
    }
  }

  useEffect(() => {
    const { current: canvas } = canvasRef;
    if (canvas) {
      drawLogo(canvas);
    }
  }, []);

  return (
    <canvas
      onClick={onClick}
      ref={canvasRef}
      className="line1"
      style={{ margin: "5px", padding: "5px" }}
      height={50}
      width={50}
    ></canvas>
  );
};

export default InteractiveLogo;
