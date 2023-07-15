import UseForm from "../hooks/UseForm";
import UseRequests from "../requests/UserRequests";

function LoginPage() {
  const { form, onChange } = UseForm({ email: "", senha: "" });
  const { login } = UseRequests();

  const fazerLogin = (event) => {
    event.preventDefault();
    login(form.email, form.senha);
  };

  return (
    <form onSubmit={fazerLogin}>
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        placeholder="E-mail"
      />

      <input
        name="senha"
        value={form.senha}
        onChange={onChange}
        type="password"
        placeholder="Senha"
      />

      <button>Fazer Login</button>
    </form>
  );
}

export default LoginPage;
