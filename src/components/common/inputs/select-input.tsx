import React from "react";
import Select from "react-select";

interface IProps {
	options: { label: string; value: string }[];
	onChange: () => void;
	placeholder: string;
	error?: string;
}

const SelectInput: React.FC<IProps> = ({
	error,
	options,
	onChange,
	placeholder,
}) => {
	console.log(error);
	return (
		<div>
			<Select
				styles={{
					input: (baseStyles) => ({
						...baseStyles,
						padding: "8px",
					}),
          control:(baseStyle) =>({
            ...baseStyle,
            borderColor:error ?  '#FB2C36' :'#D1D5DC'
          })
				}}
				onChange={onChange}
				options={options}
				placeholder={placeholder ?? "Select"}
			/>
			{error && <p className="text-xs text-red-500 mt-0">{error}</p>}
		</div>
	);
};

export default SelectInput;
