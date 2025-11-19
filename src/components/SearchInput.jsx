const SearchInput = ({ value, onChange }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="block w-1/2 mb-12 px-6 py-3 mx-auto rounded-2xl border-1 border-black bg-[#686DE0]"
        />
    );
};

export default SearchInput;
