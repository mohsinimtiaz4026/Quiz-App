export const attempt_question = (result) => {
  return result.filter((r) => r !== r.undefined).length;
};
export const totalEarnPoints = (result, answer) => {
  return result.map((e, i) => answer[i] == e).filter(i => i).map(i => 10).reduce((prev,curr) => prev+curr,0);
};
export const flagResult = (totalPoints,earnPoints) => {
  return (totalPoints * 50 / 100) < earnPoints;
}