import { DataArray } from '../types/types/DataArray';

export const generateTask = (firstData: DataArray, secondData: DataArray, thirdData?: DataArray): string => {
  const firstNum = generatorRandomNum(firstData);
  const secondNum = generatorRandomNum(secondData);
  if(thirdData){
    const thirdNum = generatorRandomNum(thirdData);
    return `${firstData[firstNum]} ${secondData[secondNum]} ${thirdData[thirdNum]}`;
  }
  return `${firstData[firstNum]} ${secondData[secondNum]}`;
};

export const generateName = (data: DataArray): string => {
  const randomNum = generatorRandomNum(data);
  return data[randomNum];
};

const generatorRandomNum = (data: DataArray): number => {
  return Math.floor(Math.random() * data.length);
};

