import { SignUpForm } from "@/widgets";

export default async function AlumniLink_SignUp_Page() {
  return (
    <div className="py-20 w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="signUp-block w-full flex justify-center items-center">
        <span className="font-pretendard font-black text-4xl text-black uppercase">
          회원가입
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <SignUpForm />
      </div>
    </div>
  );
}
