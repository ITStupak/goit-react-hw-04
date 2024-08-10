import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ children, textAlign = "", marginBottom = "0" }) => {
  return (
    <p
      className={[
        style["text"],
        style[textAlign],
        style[`marginBottom${marginBottom}`],
      ].join(" ")}
    >
      {children}
    </p>
  );
};

export default ErrorMessage;
