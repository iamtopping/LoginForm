import React from 'react'

const person = {
  name: 'Transformer',
  theme: {
    backgroundColor: '#ABB2B9 ',
    color: '#212F3C '
  }
};

export default function Blog() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Chatting</h1>
      <img
        className="avatar"
        src="https://i.pinimg.com/564x/0f/96/27/0f9627ab69246264e203061e197fcb56.jpg"
        alt="Transformer"
      />
       <img
        className="avatar"
        src="https://i.pinimg.com/564x/0f/96/27/0f9627ab69246264e203061e197fcb56.jpg"
        alt="Transformer"
      />
       <img
        className="avatar"
        src="https://i.pinimg.com/564x/0f/96/27/0f9627ab69246264e203061e197fcb56.jpg"
        alt="Transformer"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}


    
