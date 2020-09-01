const judgeVegetable = function (vegetables, metric) {
  let judgement = {
    bestSubmitter: undefined,
    bestValue: 0
  };
  for (const currentSubmitter of vegetables) {
    if(currentSubmitter[metric] > judgement.bestValue){
      judgement.bestSubmitter = currentSubmitter.submitter;
      judgement.bestValue = currentSubmitter[metric];
    }
  };
  return judgement.bestSubmitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    size: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));