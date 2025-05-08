import React from "react";
import LoginForm from "../components/auth/LoginForm";
import SocialLogin from "../components/auth/SocialLogin";
import RegisterCTA from "../components/auth/RegisterCTA";
import flagrLogo from "../assets/images/flagr-logo.png";

const Index: React.FC = () => {
  return (
    <main className="flex w-screen h-screen overflow-hidden">
      {/* Left side - Registration CTA */}
      <RegisterCTA />

      {/* Right side - Login Form */}
      <section className="flex-1 bg-white px-[326px] py-[180px] max-md:px-40 max-sm:px-6 relative">
        <h2 className="text-black text-5xl font-bold mb-12 max-md:text-4xl max-sm:text-3xl">
          Entre na sua Conta
        </h2>
        
        {/* Social Login Options */}
        <SocialLogin />
        
        <div className="text-[#666] text-base mb-6">
          ou use seu email para logar
        </div>
        
        {/* Login Form */}
        <LoginForm />
      </section>

      {/* Logo */}
      <img
        src={flagrLogo}
        alt="Flagr Logo"
        className="absolute top-[28px] right-[32px] w-[137px] h-[46px] max-sm:w-[100px]"
      />
    </main>
  );
};

export default Index;
