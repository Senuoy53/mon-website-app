import { ButtonWrapper } from "./ButtonWrapper";

const Button = ({ type, children, className, name, id, onClick }) => {
  return (
    <>
      <ButtonWrapper
        type={type}
        className={className}
        name={name}
        id={id}
        onClick={onClick}
      >
        {children}
      </ButtonWrapper>
    </>
  );
};

export default Button;
