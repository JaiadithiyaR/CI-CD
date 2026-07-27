function Button({ as: Component = 'button', variant = 'primary', children, className = '', ...props }) {
  return (
    <Component className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default Button;