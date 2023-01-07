import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Style from './Search.module.scss';
import SearchResult from './SearchResult';
import * as apiSearch from '~/Api/apiSearch';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(Style);
function Search() {
    const inputRef = useRef();
    const inputFocus = useRef();
    const inputReset = useRef();
    const [query, setQuery] = useState('');
    const [searchResult, SetSearchResult] = useState([]);
    const [widthInput, setWidthInput] = useState('0');
    const debounce = useDebounce(query, 500);
    const handleInput = () => {
        var newWidth = inputRef.current;
        setWidthInput((newWidth = '80%'));
        inputFocus.current.focus();
    };
    useEffect(() => {
        if (!debounce.trim()) {
            SetSearchResult([]);
            return;
        }
        const fetchAPI = async () => {
            if (debounce != '') {
                const keys = process.env.REACT_APP_API_KEY;
                const data = await apiSearch.Search(keys, debounce);
                const dataMoive = data.slice(0, 4);
                SetSearchResult(dataMoive);
            } else {
                setQuery('');
            }
        };
        fetchAPI();
    }, [debounce]);

    var resetIcon = false;
    if (widthInput === '80%' ? (resetIcon = true) : (resetIcon = false));
    const handleReset = () => {
        const reset = inputReset.current;
        if (reset) {
            setWidthInput('0%');
            setQuery('');
        }
    };
    const handleHideResult = () => {
        SetSearchResult([]);
    };
    const renderSearchResult = (attrs) => (
        <div className={cx('search-modal')} tabIndex="-1" {...attrs}>
            {searchResult.length > 0 && (
                <div className={cx('recommend-list')}>
                    <ul>
                        {searchResult.map((movie, index) => (
                            <SearchResult key={index} data={movie} />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
    const handleChange = (e)=>{
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ') ){

            setQuery(searchValue)
        }
    }
    return (
        <form className={cx('search-inputbox')}>
            <div>
                <FontAwesomeIcon
                    onClick={handleInput}
                    icon={faMagnifyingGlass}
                    className={cx('search-icon')}
                ></FontAwesomeIcon>
            </div>
            <div
                className={cx('search-content')}
                ref={inputRef}
                style={{
                    width: widthInput,
                    transition: 'all 0.4s',
                }}
            >
                <div className={cx('search-box')}>
                    <Tippy
                        placement="bottom"
                        interactive
                        visible={searchResult.length > 0}
                        onClickOutside={handleHideResult}
                        render={renderSearchResult}
                    >
                        <input
                            value={query}
                            onChange={handleChange}
                            ref={inputFocus}
                            type="text"
                            className={cx('btn-search')}
                            placeholder="Tìm kiếm video"
                        ></input>
                    </Tippy>
                </div>

                {resetIcon ? (
                    <div className={cx('icon-reset')} onClick={handleReset} ref={inputReset}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </form>
    );
}

export default Search;
