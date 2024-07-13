import { useState } from "react";
import { useLogin } from "../service/auth";

const initialState = {
  loginId: "",
  password: "",
};

export default function LoginPage() {
  const [login, setLogin] = useState(initialState);

  const { mutate } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login.loginId && login.password) {
      mutate(login);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>id</p>
        <input onChange={handleChange} name="loginId" value={login.loginId} />
      </div>
      <div>
        <p>pw</p>
        <input onChange={handleChange} name="password" value={login.password} />
      </div>

      <button>로그인</button>
    </form>
  );
}
