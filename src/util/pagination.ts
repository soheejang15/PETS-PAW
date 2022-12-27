export function range(start: number, end: number) {
  let array = [];
  for (let i = start; i < end; ++i) {
    array.push(i);
  }
  return array;
}

export const getIndexList = (curPage: number, maxPage: number) => {
  if (maxPage < 5) {
    return range(1, maxPage + 1);
  } else if (curPage < 3) {
    return range(1, 6);
  } else if (maxPage - curPage < 3) {
    return range(maxPage - 4, maxPage + 1);
  } else {
    return range(curPage - 2, curPage + 3);
  }
};
