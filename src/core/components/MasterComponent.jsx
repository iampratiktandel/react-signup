import React from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';


class MasterComponent extends React.Component {
  render() {
    return <section className='h-full'>
      <RegisterComponent/>
      {/* <LoginComponent/>; */}
    </section>
  }
}

export default MasterComponent;