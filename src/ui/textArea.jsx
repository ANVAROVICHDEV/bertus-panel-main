const TextArea = ({ label, height }) => {
	return (
		<div className="form-floating m-3">
			<textarea
				className="form-control textArea"
				placeholder={label}
				style={{ height: height }}
			></textarea>
			<label className="label-size" htmlFor="floatingTextarea2">{label}</label>
		</div>
	);
};

export default TextArea;
