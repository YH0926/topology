import { Node } from '../models/node';

export function roundRect(ctx: CanvasRenderingContext2D, node: Node) {
  const r = 5;
  ctx.beginPath();
  ctx.moveTo(node.x + r, node.y);
  ctx.arcTo(node.x + node.width, node.y, node.x + node.width, node.y + node.height, r);
  ctx.arcTo(node.x + node.width, node.y + node.height, node.x, node.y + node.height, r);
  ctx.arcTo(node.x, node.y + node.height, node.x, node.y, r);
  ctx.arcTo(node.x, node.y, node.x + node.width, node.y, r);
  ctx.closePath();
}
