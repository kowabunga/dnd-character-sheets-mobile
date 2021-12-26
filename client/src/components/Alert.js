const Alert = ({ alert, color, icon, component }) => {
  return (
    <div className={` text-center lead text-danger text-underline mt-4`}>
      <i className={`${icon} px-2`}></i>
      <span>{alert}</span>
      {component && component}
    </div>
  );
};
export default Alert;
