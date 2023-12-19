import css from './Filter.module.css';

export const Filter = ({onChange, value}) => {
  return (
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={css.input}
        />
      </label>
  )
}
