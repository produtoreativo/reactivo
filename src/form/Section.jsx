import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import Button from 'button/Button.jsx';
import TextField from 'textfield/TextField.js';
import uuid from 'uuid';

class Section extends React.Component {

  static contextTypes = {
    updateForm: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  }

  onChange = (field, value) => {
    const { updateForm } = this.context;
    if (updateForm) {
      updateForm(field, value);
    }
  }

  mapFields = ({ field: { label, name } }) => {
    const { fields } = this.props;
    const field = fields[name];
    return <TextField
      key={uuid()}
      onChange={this.onChange.bind(this, field)}
      value={field.value}
      labelName={label}
      name={name}
    />
  }

  mapSectionColumns = (fieldList) => {
    const fields = fieldList.map(this.mapFields, this);
    return <div key={uuid()} className="FormSectionColumn">{fields}</div>;
  }

  mapButtons = ({ name, label, onClick }) => {
    const action = this.context[onClick];
    return <Button key={uuid()} onClick={action} name={name} label={label} />
  }

  render() {
    const { description, buttons, columns } = this.props;
    const sectionColumns = Immutable.fromJS(columns)
                                    .groupBy(x => x.get("sectionColumn"))
                                    .toArray()
                                    .map(item => item.toJS());

    const container = (buttons && buttons.length) ?
      <div className="FormSection FormSectionButtons mdl-card__actions mdl-card--border">
        {buttons.map(this.mapButtons, this)}
      </div> :
      <div className="FormSection mdl-card__supporting-text">
        <div className="FormSectionTitle mdl-card__title">
          <h2>{description}</h2>
        </div>
        <div className="FormSectionFields">
          {sectionColumns.map(this.mapSectionColumns, this)}
        </div>
      </div>

    return (container);
  }
}

export default Section;
