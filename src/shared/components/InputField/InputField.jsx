import { useMemo } from "react";
import { nanoid } from "nanoid";

import css from './InputField.module.scss'

const InputField = ({ label, handleChange, ...props }) => {
    const id = useMemo(() => nanoid(), [])
    return (
      <div>
        <label className={css.label} htmlFor={id}>
          {label}
          <input
            id={id}
            onChange={handleChange}
            {...props}
            className={css.input}
          />
        </label>
      </div>
    );
}

export default InputField