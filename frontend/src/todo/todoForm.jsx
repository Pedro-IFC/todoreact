import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { changeDescription,search, add, markAsDone, clear} from './todoActions';
import Grid from '../template/grid';
import IconButton from '../template/IconButton';

class todoForm extends Component {
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }
    componentWillMount(){
        this.props.search();
    }
    keyHandler(e){
        if(e.key==="Enter"){
            e.shiftKey? this.props.search() : this.props.add(this.props.description);
        }else if(e.key==="Escape"){
            this.props.clear();
        }
    }
    render(){
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className='form-control'
                    placeholder='Adicione uma tarefa' 
                    value={this.props.description} 
                    onChange={this.props.changeDescription} onKeyUp={this.keyHandler}/>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon="plus" onClick={_=>this.props.add(this.props.description)}></IconButton>
                    <IconButton style="info" icon="search" onClick={_=>this.props.search}></IconButton>
                    <IconButton style="default" icon="close" onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, markAsDone, clear}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(todoForm);