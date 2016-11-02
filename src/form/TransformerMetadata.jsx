import React, { PropTypes } from 'react';
import Section from 'form/Section.jsx';

class TransformerMetadata extends React.Component {

  mapSections = ({ description, sectionButtons, sectionFields }) => {
    const { fields } = this.props;
    return <Section
      fields={fields}
      description={description}
      buttons={sectionButtons}
      columns={sectionFields}
    />
  }

  mapMetadata = () => {
    const { metadata: { sections } } = this.props;
    return sections.map(this.mapSections, this);
  }

  render () {
    const container = this.mapMetadata();
    return (
      <div className="FormContainer--body mdl-card">
        {container}
      </div>
    );
  }
}

export default TransformerMetadata;
