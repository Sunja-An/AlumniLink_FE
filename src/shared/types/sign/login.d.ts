export type useLoginType = {
  email: {
    name: "email";
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    name: "password";
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  onSubmit: (e: MouseEvent<HTMLInputElement>) => Promise<void>;
};

export type LoginType = {
  email: string;
  password: string;
};
