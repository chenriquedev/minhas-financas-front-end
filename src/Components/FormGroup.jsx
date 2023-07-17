function FormGroup({ type, id, label, placeholder, describedby = null, value,change, name = null}) {
  return (
    <div className="form-group">
      <label className="col-form-label" htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={change}
        className="form-control"
        id={id}
        placeholder={placeholder}
        aria-describedby={describedby}
        name={name}
      />
    </div>
  );
}

export default FormGroup;
