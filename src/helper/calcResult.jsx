export const attempt_question = (queue) => {
  let total = 0;
  queue.map((item,index) => {
    console.log(item)
    if(item.userAnswer !== null){
      total = total+1;
    }
  })
  return total;
};
export const totalEarnPoints = (queue) => {
  let total = 0;
  queue.map((item,index) => {
    if(item.originalAnswer == item.userAnswer){
      total = total+1;
    }
  })
  return total*10;
};
export const flagResult = (earnPoints,totalPoints) => {
  return (earnPoints / totalPoints * 100);
}