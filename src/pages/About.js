import React from 'react'


function Profile() {
  return (
    <img
    className='avatar'
      src="https://i.pinimg.com/564x/9d/bf/80/9dbf80961f66b90ad0f7185ce8dbd848.jpg"
      alt="BWM"
      width={400}
    />
  );

}
export default function  About() {
  const name = 'SpiderMan';
  return (
    <div className='About'>
       <h1>{name} </h1>

      <div className='my-info'>
        <a className='my-fb' href='https://www.facebook.com/profile.php?id=100009375749015'>
          My Facebook <i class="fa-brands fa-facebook"></i>
        </a>
        <a className='my-insta' href='https://www.instagram.com/son_dth1210/'>
          My Instagram  <i class="fa-brands fa-instagram"></i>
        </a>
      </div>  

      <div className='container-blog'>
        <Profile />
        <img src='https://i.pinimg.com/564x/0f/96/27/0f9627ab69246264e203061e197fcb56.jpg' width={400} height="auto"/>
        <img src='https://i.pinimg.com/564x/ee/a5/53/eea553f5c6c56ba349d8c0e7d11e57b4.jpg'/>
    </div>
    </div>
  );
}




    
