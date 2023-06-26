import InputField from 'shared/components/InputField/InputField';
import useForm from 'shared/Hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import css from './registration.module.scss';
import Button from 'shared/components/button/Button';
const Registration = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, password, email } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <InputField value={name} onChange={handleChange} {...fields.name} />
      <InputField value={email} onChange={handleChange} {...fields.email} />
      <InputField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Register now</Button>
    </form>
  );
};
export default Registration;
