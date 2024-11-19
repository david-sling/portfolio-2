import { Dispatch, FC, SetStateAction } from "react";

export const TextField: FC<{
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  label?: string;
}> = ({ value, onChange, label }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <div className="bg-dark-900 border border-dark-300 flex rounded-[10px]">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 bg-transparent flex-1 focus:outline-0"
        />
      </div>
    </div>
  );
};
