import React, {useState} from 'react';
import {BsSearch, BsYoutube} from 'react-icons/bs';

export default function SearchHeader() {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
      <header>
        <div>
          <BsYoutube />
          <h1>Youtube</h1>
        </div>
        <form>
            <input type="text" placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)}></input>
            <button>
                <BsSearch />
            </button>
        </form>
      </header>
    )
  }
  