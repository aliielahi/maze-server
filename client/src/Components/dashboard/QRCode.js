import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkQR } from '../../actions/dataActions';
class QRCode extends Component {
  componentDidMount() {
    const { match } = this.props
    const url = match.url.split('/');
    console.log(url[url.length-1])
    this.props.checkQR(url[url.length-1])
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div className='underCPage'>
        <div className=' admin-scroll-y'>
          <div className='dashHeight blackBack dashpadding'>
              <h1 className='text-center font2'>Wrong QR Code</h1>
          </div>
        </div>
      </div> 
    )
  }
}

QRCode.propTypes = {
  auth: PropTypes.object.isRequired,
  checkQR: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.data,
  auth: state.auth,
});

export default connect(mapStateToProps, { checkQR })(QRCode);
