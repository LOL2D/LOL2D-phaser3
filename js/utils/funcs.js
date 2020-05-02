// ========================= uuid =============================
export function uuidv4_v1() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function uuidv4() {
  return `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

// ======================= unit converter ====================
export function unitConvert_CanvasToGame(canvasUnitValue) {
  return ~~(canvasUnitValue / 3.7);
}
export function unitConvert_GameToCanvas(gameUnitValue) {
  return ~~(gameUnitValue * 3.7);
}
export function unitConverter({ from, to, value }) {
  if (from == 'canvas' && to == 'game') return unitConvert_CanvasToGame(value);
  if (from == 'game' && to == 'canvas') return unitConvert_GameToCanvas(value);
  return 0;
}
