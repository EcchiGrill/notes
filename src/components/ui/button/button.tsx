import styles from "./button.module.scss";

const Button: React.FC<React.ComponentProps<"button">> = ({
  className,
  ...props
}) => {
  return (
    <button className={styles.button + " " + className} {...props}></button>
  );
};

export default Button;
