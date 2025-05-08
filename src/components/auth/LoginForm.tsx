import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema
const loginSchema = z.object({
  email: z.string().email("Por favor, insira um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Here you would typically handle the login logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-[634px]">
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full h-12 rounded border px-4 border-solid border-[#ddd] focus:outline-none focus:border-[#309E4F]"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Senha"
          {...register("password")}
          className="w-full h-12 rounded border px-4 border-solid border-[#ddd] focus:outline-none focus:border-[#309E4F]"
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="text-[#309E4F] text-sm cursor-pointer hover:underline">
        Esqueceu sua senha?
      </div>

      <button 
        type="submit" 
        className="w-full h-12 bg-[#309E4F] text-white rounded font-medium hover:bg-[#277C30] transition-colors"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
