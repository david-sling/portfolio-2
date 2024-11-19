import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

export const FileField: FC<{
  label?: string;
  src: string;
  setSrc: Dispatch<SetStateAction<string>>;
}> = ({ label, setSrc, src }) => {
  return (
    <div>
      <p>{label}</p>
      <div className="bg-dark-900 border border-dark-300 rounded-[10px] p-5">
        <input
          onChange={(e) => {
            const file = e.target.files?.[0];
          }}
          className="h-[100px]"
          type="file"
          name=""
          id=""
        />
        <img src={src} />
      </div>
    </div>
  );
};
