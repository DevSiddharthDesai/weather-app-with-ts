import React, {useState} from "react";

interface FuncProps {
    onSearchClick(city: string): void;
}

const Form: React.FC<FuncProps> = (props) => {
  
    const {onSearchClick} = props;
    const [searchTerm, setSearchTerm] = useState('');
    
    const onSearchInputChange = (e: any) => {
        setSearchTerm(e.target.value);
    }

    const onSubmitButtonClick = () => {
        onSearchClick(searchTerm);
    }
  
  return (
    <div className="input-group rounded mb-3">
      <input
        type="search"
        className="form-control rounded"
        placeholder="City"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={onSearchInputChange}
      />
      <button className="input-group-text border-0 fw-bold" id="search-addon" onClick={onSubmitButtonClick}>
          Check!
      </button>
    </div>
  );
};

export default Form;
