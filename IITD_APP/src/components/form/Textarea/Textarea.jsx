import React from 'react';
import { ErrorMessage, Field } from 'formik';

export function Textarea({ label, name, labelColor, style, cols, rows, ...props }) {
  return (
    <div className="w-[100%] m-auto rounded-sm my-3">
      {label && (
        <label
          className={`text-[0.8rem] py-1 text-start ${labelColor || 'text-blue-800'}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Field
        as="textarea"
        className={`h-[10rem] text-[18px] rounded-sm w-[100%] outline-none ${style}`}
        name={name}
        cols={cols}
        rows={rows}
        placeholder={name=="write about your project" ? `${name}`:"Enter Message"}
        {...props}
      />
      <div className="text-red-500 h-3 text-xs">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}
