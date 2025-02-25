export type useSignUpFormType = {
  email: {
    name: "email";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    name: "password";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  nickname: {
    name: "nickname";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  gitLink: {
    name: "gitLink";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  resumeLink: {
    name: "resumeLink";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  employed: {
    name: "employed";
    value: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

export type SignUpType = {
  email: string;
  nickname: string;
  password: string;
  gitLink: string;
  resumeLink: string;
  employed: boolean;
};
