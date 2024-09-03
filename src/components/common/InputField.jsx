"use client"

const InputField = ({ icon, placeholder, getText }) => {
  const handleInputField = (e) => {
    const value = e.target.value;
    getText(value);
  };

  return (
    <div>
      <div
        style={{
          margin: "1rem 0rem",
        }}
        className="full-width main-search-box"
      >
        {icon && <div className="icon">{icon}</div>}
        <div className="search-box full-width">
          <input
            type="text"
            name="search"
            placeholder={placeholder ? placeholder : "Enter Text here..."}
            onChange={handleInputField}
            className="full-width search"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
