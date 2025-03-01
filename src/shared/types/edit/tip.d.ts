export type useTipFormType = {
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
    value: "TIP";
  };
};

export type TipType = {
  title: string;
  body: string;
  description: string;
  tag: "TIP";
};
