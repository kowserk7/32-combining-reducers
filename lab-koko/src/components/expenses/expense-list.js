import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expense-form';
import ExpenseItem from './expense-item';
import { renderIf } from '../../lib/utils';
import { expenseCreate } from '../../actions/expense-actions';


class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.expenses
    console.log(this.props.categoryId);
  }
  render() { 
    return ( 
      <div className="expense-list">
        <ExpenseForm 
          className="expense-form"  
          buttonText= 'Add'
          categoryId ={this.props.categoryId}
          onComplete={this.props.expenseListExpenseCreate}
        />
        {/* {this.renderIf(this.props.expense[this.props.categoryId],
          this.props.expenses[this.props.categoryId].map(expense => <ExpenseItem key={expense._id} expense={expense} />)
        )} */}
        {this.props.expenses?
          <p>
            {this.props.expenses[this.props.categoryId].map(expense => <ExpenseItem key={expense._id} expense={expense} />)}
          </p>
          :
          undefined
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});
const mapDispatchToProps = (dispatch, getState) => ({
  expenseListExpenseCreate: expense => dispatch(expenseCreate(expense)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
