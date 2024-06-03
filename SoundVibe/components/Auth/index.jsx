import { useState } from "react";
import Loader from "../Loader";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const authOptions = [
  {
    option: "signin",
  },
  {
    option: "signup",
  },
];

const Auth = ({ setAccount, onModalWillHide }) => {
  const [option, setOption] = useState(authOptions[0].option);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeAuthOption = () =>
    option === authOptions[0].option
      ? setOption(authOptions[1].option)
      : setOption(authOptions[0].option);

  if (isLoading) return <Loader bgNone={true} />;

  if (option === authOptions[0].option)
    return (
      <LoginModal
        setAccount={setAccount}
        changeOption={handleChangeAuthOption}
        onModalWillHide={onModalWillHide}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  return (
    <SignUpModal
      changeOption={handleChangeAuthOption}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
};

export default Auth;
