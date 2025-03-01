export type useQuestionFormType = {
  title: {
    name: "title";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  body: {
    name: "body";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  description: {
    name: "description";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  tag: {
    name: "tag";
    value: "QUESTION";
  };
};

export type QuestionType = {
  title: string;
  body: string;
  description: string;
  tag: "QUESTION";
};
