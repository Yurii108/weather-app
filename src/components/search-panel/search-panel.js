import SearchPanelIcon from './search-panel-icon.js';

import './search-panel.css';


const SearchPanel = () => {
    return (
        <div className="row px-3">
            <input type="text" name="location" placeholder="Another location" className="mb-5" />
            <div className="fa fa-search mb-5 mr-0 text-center" type="submit">
                <SearchPanelIcon />

            </div>
        </div>
    )
};

export default SearchPanel;