export type useSignUpFormType = {
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
  nickname: {
    name: "nickname";
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  gitLink: {
    name: "gitLink";
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  resumeLink: {
    name: "resumeLink";
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  employed: {
    name: "employed";
    value: boolean;
    placeholder: string;
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
