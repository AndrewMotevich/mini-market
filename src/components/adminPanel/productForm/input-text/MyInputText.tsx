import { ChangeHandler, RefCallBack } from "react-hook-form";

type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
  type: string;
  label: string;
};

const MyInput = ({ inputRef, name, onChange, type, label }: props) => {
  return (
    <label>
      <strong>
        {label}
        <span>*</span>:
      </strong>
      <input type={type} ref={inputRef} name={name} onChange={onChange} />
    </label>
  );
};

export default MyInput;
