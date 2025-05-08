import React from "react";

// Import social media icons
import facebookIcon from "../../assets/images/facebook-icon.svg";
import googleIcon from "../../assets/images/google-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";

const SocialLogin: React.FC = () => {
  return (
    <div className="flex gap-2 mb-8">
      <SocialButton icon={facebookIcon} onClick={() => console.log("Facebook login")} />
      <SocialButton icon={googleIcon} onClick={() => console.log("Google login")} />
      <SocialButton icon={linkedinIcon} onClick={() => console.log("LinkedIn login")} />
    </div>
  );
};

interface SocialButtonProps {
  icon: string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, onClick }) => {
  return (
    <button 
      className="w-[73px] h-[73px] opacity-70 flex items-center justify-center rounded-full border-2 border-[#277C30] transition-opacity hover:opacity-100"
      onClick={onClick}
      aria-label="Social login button"
    >
      <img src={icon} alt="" className="w-[24px] h-[24px]" />
    </button>
  );
};

export default SocialLogin;
