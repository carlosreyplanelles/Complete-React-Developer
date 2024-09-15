import "./button.styles.scss";

export function Button({ text, buttonClass, ...props }) {
  return (
    <button
      className={`button-container ${buttonClass ? buttonClass : ""}`}
      {...props}
    >
      {text}
    </button>
  );
}
