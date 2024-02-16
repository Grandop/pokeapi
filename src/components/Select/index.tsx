import CreatableSelect from 'react-select/creatable';

export const Select = () => {
  return (
    <>
      <CreatableSelect
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: 'none',
            borderColor: state.isFocused ? 'white' : 'white',
            height: '3.5rem',
            width: '15rem',
            outline: 'none'
          }),
        }} 
      />
    </>
  );
}