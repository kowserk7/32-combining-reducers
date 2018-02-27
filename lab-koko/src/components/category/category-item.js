import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category/category-form';
import { renderIf } from '../../lib/utils';
import { categoryUpdate, categoryDelete } from '../../actions/category-actions';


class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = this.props.category 
    this.state.edit = false;
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.categoryItemCategoryDelete(this.state);
  }
  render() { 
    return ( 
      <div onDoubleClick={() => this.setState({edit: !this.state.edit})}>
        <h3>{this.props.category.title}</h3>
        <p>Budget: ${this.props.category.budget}</p>
        <button id={this.props.category._id} onClick={this.handleDelete}>Delete</button>
        {renderIf(this.state.edit,
          <CategoryForm category={this.props.category} 
          buttonText='Update' 
          onComplete={this.props.categoryItemCategoryUpdate}/>
        )}
      </div>
     )
  }
} 
const mapStateToProps = state => ({
  categories: state,
});
const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);