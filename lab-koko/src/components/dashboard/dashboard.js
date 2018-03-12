import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../category/category-form';
import CategoryItem from '../category/category-item';
import { categoryCreate, categoryUpdate, categoryDestroy } from '../../actions/category-actions';

class Dashboard extends React.Component {
  render() { 
    return ( 
      <section>
        <h1>Budget Tracker</h1>
        <CategoryForm 
          buttonText= 'Create'
          onComplete={this.props.dashboardCategoryCreate}
        />
        {this.props.categories ?
          this.props.categories.map(cat => 
            <CategoryItem className= "category-items" key={cat._id} category={cat}/>
          )
          :undefined 
        }
      </section>
    );
  }
} 
const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});
const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);