import React from "react";

const RegisterCTA: React.FC = () => {
  const handleRegisterClick = () => {
    console.log("Register button clicked");
    // Here you would typically navigate to the registration page
  };

  return (
    <section className="w-[634px] bg-[#309E4F] flex flex-col px-[97px] py-[380px] max-md:px-12 max-sm:px-6 max-sm:py-[200px]">
      <h1 className="text-white text-[64px] font-bold mb-[77px] max-md:text-5xl max-sm:text-4xl">
        Olá, Startup!
      </h1>
      
      <div className="text-white text-[32px] mb-8 max-md:text-[28px] max-sm:text-2xl">
        <span>Bem vindo a Flagr!</span>
        <div className="mt-[7px]">Se ainda não tem uma conta,</div>
        <div className="mt-[7px]">realize seu cadastro.</div>
      </div>
      
      <button 
        onClick={handleRegisterClick}
        className="text-white text-2xl font-bold border w-[269px] h-[72px] cursor-pointer rounded-[30px] border-solid border-white flex items-center justify-center hover:bg-white hover:text-[#309E4F] transition-colors max-md:w-60 max-sm:w-full"
      >
        Cadastre-se
      </button>
    </section>
  );
};

export default RegisterCTA;
