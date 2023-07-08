import { ChangeHandler, RefCallBack } from "react-hook-form";

type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
};

const MyInputText = ({ inputRef, name, onChange }: props) => {
  return (
    <label>
      <strong>{name}:</strong>
      <input type="text" ref={inputRef} name={name} onChange={onChange} />
    </label>
  );
};

export default MyInputText;
