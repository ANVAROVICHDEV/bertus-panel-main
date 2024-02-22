const FormText = ({ type = "text", label, width, defaultValue }) => {
	return (
		<div className="form-floating m-3" style={{ width: width }}>
			<input
				type={type}
				className="form-control"
				placeholder={label}
				defaultValue={defaultValue}
			/>
			<label className="label-size" htmlFor="floatingInput">{label}</label>
		</div>
	);
};

export default FormText;
