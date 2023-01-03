export const parseSex = (sex: string) => {
  switch (sex) {
    case "F":
      return "암";
    case "M":
      return "수";
    default:
      return "알 수 없음";
  }
};

export const parseNeutered = (neutered: string) => {
  switch (neutered) {
    case "Y":
      return "O";
    case "N":
      return "X";
    default:
      return "알 수 없음";
  }
};

export const parseStringToDate = (date: string) => {
  if (!date) {
    return "";
  }
  const yyyy = date.substring(0, 4);
  const mm = date.substring(4, 6);
  const dd = date.substring(6, 8);

  return `${yyyy}-${mm}-${dd}`;
};
