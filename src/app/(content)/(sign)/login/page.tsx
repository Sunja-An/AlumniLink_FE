import { LoginForm } from "@/widgets";

export default function AlumniLink_Login_Page() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="w-full flex justify-center items-center">
        <span className="font-pretendard font-black text-4xl text-black uppercase">
          Login
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
}
