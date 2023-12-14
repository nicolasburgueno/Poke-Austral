const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray: T[] = [...array];

  shuffledArray.sort(() => Math.random() - 0.5);

  return shuffledArray;
};

export default shuffleArray;
