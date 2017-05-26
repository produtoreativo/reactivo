import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import TransformerMetadata from 'form/TransformerMetadata.jsx';
import './FormContainer.css';

class FormContainer extends React.Component {

  state = {
    fields: {},
    dirty: {},
  }

  static childContextTypes = {
    updateForm: PropTypes.func,
    onSave: PropTypes.func,
  }

  getChildContext() {
    return {
      updateForm: this.updateForm,
      onSave: this.onSave,
    };
  }

  updateForm = (field, value) => {
    const { dirty } = this.state;
    const newField = {
      ...field,
      value,
    };
    this.setState({
      ...this.state,
      dirty: {
        ...dirty,
        [newField.name]: newField,
      }
    });
  }

  onSubmit = (event) => {
    const { onSubmit } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (onSubmit) {
      onSubmit();
    }
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  onSave = () => {
    const { fields } = this.state;
    debugger;
  }

  componentWillMount() {
    const { Map, Set, fromJS } = Immutable;
    const { metadata } = this.props;
    const fields = Map(metadata
      .sections
      .map(item => item.sectionFields.map(section => {
        var field = {
          ...section.field,
          value: '',
        }
        return [field.name, field]
      }))
      .reduce((arr, item) => {
        return [
          ...arr,
          ...item,
        ];
      }, [])).toJS();
    this.setState({
      fields,
      dirty: {
        ...fields,
      }
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render () {
    const { fields } = this.state;
    const { metadata } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <TransformerMetadata
          fields={fields}
          metadata={metadata}
        />
      </form>
    )
  }
}

export default FormContainer;
