import React, { useState, useEffect } from 'react';
import History from './History';
import { Link } from 'react-router-dom';

const Search = ({ location }) => {
  // useState hooks for input and language
  const [language, setLanguage] = useState('');
  const [input, setInput] = useState('');

  // equivalent to componentDidMount, fires once when component mounts
  useEffect(() => {
    // get all the URLParams
    const params = new URLSearchParams(location.search);
    // get the q param
    const q = params.get('q');
    // set language in state to the q parameter
    setLanguage(q ? q : 'MatLab');
    //eslint-disable-next-line
  }, []);

  // function for handling form submit
  const submitAction = (e) => {
    // prevents default, so page won't reload on form submit
    e.preventDefault();
    // set language in state
    setLanguage(input);
    // add query string to URL
    History.push('/search?q=' + input);
    // clear the input
    setInput('');
  };

  return (
    <>
      <div className='bg-dark text-light'>
        <div className='container pt-5' style={{ height: '100vh' }}>
          <Link to='/' className='btn btn-success mb-5'>
            &#11207; Back to Home
          </Link>
          <h1>{language}</h1>
          <p>
            <span className='text-info'>{language} </span>is a very cool
            programming language. It's used by many developers from all around
            the world. Every programmer should have heard of{' '}
            <span className='text-info'>{language} </span>before.
          </p>

          <form onSubmit={submitAction} className='mt-5'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Type language...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className='input-group-append'>
                <button className='btn btn-primary' type='submit'>
                  Go!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
