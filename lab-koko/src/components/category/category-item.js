import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category/category-form';
import { renderIf } from '../../lib/utils';
import { categoryUpdate, categoryDelete } from '../../actions/category-actions';
import ExpenseList from '../expenses/expense-list';
import { expenseCreate } from '../../actions/expense-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category; 
    this.state.edit = false;
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.categoryItemCategoryDelete(this.state);
  }
  render() { 
    return ( 
      <div className="categoryItems" className="animated lightSpeedIn">
        <div className="category-item" onDoubleClick={() => this.setState({edit: !this.state.edit})}>
          <h3>{this.props.category.title}</h3>
          <p>Budget: ${this.props.category.budget}</p>
          <button id={this.props.category._id} onClick={this.handleDelete}>Delete</button>
        </div>
        {renderIf(this.state.edit,
          <CategoryForm category={this.props.category} 
            buttonText='Update' 
            onComplete={this.props.categoryItemCategoryUpdate}/>
        )}
        <h2>Add an expense</h2>
        <ExpenseList 
          className="expense-list"
          categoryId={this.props.category._id}
        />
      </div>
    );
  }
} 
const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});
const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
  categoryItemExpenseCreate: expense => dispatch(expenseCreate(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);