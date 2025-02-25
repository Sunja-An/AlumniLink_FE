export type useProjectFormType = {
  name: {
    name: "name";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  info: {
    name: "info";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  link: {
    name: "link";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  maxCount: {
    name: "maxCount";
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  deadline: {
    name: "deadline";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

export type ProjectType = {
  name: string;
  info: string;
  link: string;
  maxCount: number;
  deadline: string;
};
