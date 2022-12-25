import {generateTask, generateName} from '../common/utils';
import {sToTaskNames, sToTaskSecond, sToTaskThird} from '../data/questionData';
import {hollywoodStars, hollywoodStarsData} from '../data/questionData';
import {DataArray} from '../types/types/DataArray';

export const generateTasks = (): string[] => {
  const result = [];
  for(let i = 0; i < 15; i++) {
    const data = generateTask(sToTaskNames, sToTaskSecond, sToTaskThird);
    result.push(data);
  }
  return result;
};

export const generateHollywoodTask = (): string[] => {
  const result = [];
  for(let i = 0; i < 15; i++) {
    const data = generateTask(hollywoodStars, hollywoodStarsData);
    result.push(data);
  }
  return result;
};

export const generateNames = (num: number): DataArray => {
  const result:DataArray = [];
  for(let i = 0; i < num; i++){
    const data = generateName(hollywoodStars);
    if(result.includes(data)){
      i--;
      continue;
    }
    result.push(data);
  }
  return result;
};
