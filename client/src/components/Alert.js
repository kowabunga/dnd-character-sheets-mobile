const Alert = ({ alert, color, icon }) => {
  return (
    <div className={` text-center lead text-danger text-underline mt-4`}>
      <i class={`${icon} px-2`}></i>
      <span>{alert}</span>
    </div>
  );
};
export default Alert;
