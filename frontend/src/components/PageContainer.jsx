function PageContainer({ as: Component = 'div', children, className = '', ...props }) {
  return (
    <Component className={`page-container ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default PageContainer;