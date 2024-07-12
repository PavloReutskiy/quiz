import { getDataFromLocalStorage } from './getDataFromLocalStorage';

export const downloadCSV = (headers: QuizHeaders) => {
  const data = {
    language: getDataFromLocalStorage('language'),
    gender: getDataFromLocalStorage('gender'),
    age: getDataFromLocalStorage('age'),
    hate: getDataFromLocalStorage('hate'),
    topics: getDataFromLocalStorage('topics'),
    email: getDataFromLocalStorage('email'),
  };

  const csvData: string[][] = [
    ['order', 'title', 'type', 'answer'],
    ['1', `"${headers.language}"`, 'single-select', `"${data.language}"`],
    ['2', `"${headers.gender}"`, 'single-select-image', `"${data.gender}"`],
    ['3', `="${headers.age}"`, 'single-select', `="${data.age}"`],
    ['4', `"${headers.hate}"`, 'multiple-select', `"${data.hate.join(', ')}"`],
    ['5', `"${headers.topics}"`, 'bubble', `"${data.topics.join(', ')}"`],
    ['6', `"${headers.email}"`, 'email', `"${data.email}"`],
  ];

  const csvString = csvData.map((row) => row.join(',')).join('\n');

  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'QuizData.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
