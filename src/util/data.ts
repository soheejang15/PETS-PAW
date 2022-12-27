export const getSex = (sex: string) => {
  switch (sex) {
    case "F":
      return "암";
    case "M":
      return "수";
    default:
      return "알 수 없음";
  }
};
