import InputField from "shared/components/InputField/InputField";
import useForm from "shared/Hooks/useForm";
import initialState from './initialState'
import Button from "shared/components/button/Button";
import fields from './fields'
import css from './login.module.scss'

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({
        initialState,
        onSubmit,
    })
    const { email, password } = state
    return (
      <form onSubmit={handleSubmit}>
        <InputField value={email} onChange={handleChange} {...fields.email} />
        <InputField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Button>Login now</Button>
      </form>
    );
}
export default LoginForm;