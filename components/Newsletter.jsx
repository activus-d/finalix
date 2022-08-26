import React, { useRef, useState, useEffect } from 'react';

function Newsletter() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
    const [message, setMessage] = useState('');

    const subscribe = async (e) => {
        e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/newsletters', {
        body: JSON.stringify({
        email: inputEl.current.value
        }),
        headers: {
        'Content-Type': 'application/json'
        },
        method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      // 4. If there was an error, update the message in state.
        setMessage(error);
        return;
    }
    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };
useEffect(()=>{
    const timeout = setTimeout(()=>{
      setMessage('')
    },3000)
    return () => clearTimeout(timeout);
},[message])
  return (
    <div className='my-12  text-white'>
            <h3 className=' text-2xl'>Finalix Newsletter</h3>
            <form onSubmit={subscribe} className='text-center h-full flex flex-wrap xs:flex-nowrap items-center '>
                <input
                id="email-input"
                name="email"
                placeholder="Your Email Address"
                ref={inputEl}
                required
                type="email"
                className='border text-2xl px-8 border-white h-[4rem] bg-transparent sm:mx-0 w-full ss:w-[50rem]'
                />
                <div>
        </div>
                <button type="submit" className='my-4 text-navBarBg bg-white text-2xl px-6 py-2 mx-auto ss:mx-0 capitalize rounded-br-xl h-[4rem] rounded-tr-xl font-bold'>Send</button>
            </form>
            <p className='pt-4'>
            {message
            ? message
            : `We will only send emails when new articles amd features are added No spam.`}
        </p>
    </div>
);
}
export default Newsletter