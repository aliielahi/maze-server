import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDashBoardData, getCurrenntQRCode, startGame, answerQuestion } from '../../actions/dataActions';
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const answerData = {
      answer: this.state.answer
    };
    this.props.answerQuestion(answerData)
    window.setTimeout(window.location.reload(), 1000);
  };
  componentDidMount() {
    this.props.getDashBoardData();
  }
  onClickStartGame = e => {
    this.props.startGame();
    window.setTimeout(window.location.reload(), 1000);
  }
  onClickGetQRCode = e => {
    this.props.getCurrenntQRCode();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    let toRender;
    let a, b;
    let GroupUsers = [];
    let groupInfo;
    if(this.props.errors !== undefined && this.props.data.data !== undefined && this.props.data.data.question !== undefined && this.props.data.data.group.enable !== undefined ) {
      if(this.props.data.data.groupUsers.length !== undefined) {
        for(let i =0; i<this.props.data.data.groupUsers.length;i++) {
          if(this.props.data.data.groupUsers[i].name !== undefined) {
            GroupUsers.push((
              <h1 className='font2'>{this.props.data.data.groupUsers[i].name}</h1>
            ))
          }
        }
      }
      if(this.props.data.data.group.hints !== undefined && this.props.data.data.group.usedHints !== undefined) {
        a=this.props.data.data.group.hints;
        b=this.props.data.data.group.usedHints;
      }
      if(this.props.data.data.group.answerdQuestions.length !== null) {
        groupInfo = (
          <div className='dashHeight blackBack dashpadding'>
              <h1 className='text-center font2'>Group: {this.props.data.data.group.groupName}</h1>
              <h1 className='font2'>{this.props.data.data.group.answerdQuestions.length} Answerd Questions</h1>
              <h1 className=" font2">Hints : {a}</h1>
              <h1 className=" font2">Used Hints : {b}</h1>
              <h1 className='font2'>Group Members:</h1>
              {GroupUsers}
          </div>
        )
      }

      if(!this.props.data.data.group.enable) {
        console.log('1');
        toRender = (
          <div className='dashHeight blackBack dashpadding'>
            <button onClick={this.onClickStartGame} className="btn notFoundPTag text-cente font1 mybtn1">Start Game</button>
          </div>
        )
      } else if (this.props.data.data.question) {
        const { currentQuestion } = this.props.data.data
        toRender = (
          <div className='dashHeight blackBack dashpadding'>
            <h1 className='text-center font2'>{currentQuestion.questionName}</h1>
            <p className=''>{currentQuestion.questionText}</p>
            <form onSubmit={this.onSubmit} method="post" id="myform">
                <div className="input-group input-group-lg">
                  <input 
                    type="answer"
                    name="answer"
                    className='inputLayout inputBorder form-control'
                    value={this.state.email}
                    onChange={this.onChange}
                    placeholder="Answer"
                  />
                  {this.props.data.picture && (
                  <div className='errorbackgroung'>{this.props.errors.wrongAnswer}</div>
                  )}
                </div>
                <div className="form-row-last">
                  <input type="submit" name="submit" className="btn font1 mybtn1 submitLayout" value="Submit" />
                </div>
            </form>
          </div>
         )
      } else if (!this.props.data.data.question) {
        console.log('3');
        toRender = (
          toRender = (
            <div className='dashHeight blackBack dashpadding'>
              <button onClick={this.onClickGetQRCode} className="btn notFoundPTag text-cente font1 mybtn1">Get You Gift :)</button>
            </div>
          )
        )
      }
      
    }
    
    return (
      <div className='underCPage'>
        <div className=' admin-scroll-y'>
        {toRender}
        {groupInfo}
        </div>
      </div> 
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getDashBoardData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getCurrenntQRCode: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  answerQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { getDashBoardData, getCurrenntQRCode, startGame, answerQuestion })(Dashboard);
