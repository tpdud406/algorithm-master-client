export const fakeProblem = {
  _id: "1234",
  author: "0000",
  title: "title1",
  description: "description1",
  tests: [
    {
      description: "test description1",
      input: "solution(1)",
      output: 1,
      _id: "aaaa",
    },
    {
      description: "test description2",
      input: "solution(2)",
      output: 2,
      _id: "bbbb",
    },
  ],
  averageRuntimes: [0.1, 0.2, 0.3],
};

export const fakeProblems = [
  {
    _id: "1234",
    author: "0000",
    title: "title1",
    description: "description1",
    tests: [
      {
        description: "test description1",
        input: "solution(1)",
        output: 1,
        _id: "aaaa",
      },
      {
        description: "test description2",
        input: "solution(2)",
        output: 2,
        _id: "bbbb",
      },
    ],
    averageRuntimes: [0.1, 0.2, 0.3],
  },
  {
    _id: "5678",
    author: "1111",
    title: "title2",
    description: "description2",
    tests: [
      {
        description: "test description1",
        input: "solution(3)",
        output: 3,
        _id: "aaaa",
      },
      {
        description: "test description2",
        input: "solution(4)",
        output: 4,
        _id: "bbbb",
      },
    ],
    averageRuntimes: [0.1, 0.2, 0.3],
  },
];
