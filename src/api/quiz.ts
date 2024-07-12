export const createQuiz = async (data: object) => {
  const response = await fetch(
    'https://quiz-data.free.beeceptor.com/quiz/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('Data sent to the server: ', JSON.stringify(data));

  const responseData = await response.json();
  console.log('responseData', responseData);

  return responseData;
};

export const updateQuiz = async ({
  id,
  data,
}: {
  id: string;
  data: object;
}) => {
  const response = await fetch(
    `https://quiz-data.free.beeceptor.com/quiz/update/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
