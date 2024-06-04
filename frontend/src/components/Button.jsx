const Button = ({ title, styleClass, ...restProps }) => {
  return (
    <div>
      <button className={styleClass} {...restProps}>
        {title}
      </button>
    </div>
  );
};

export default Button;
