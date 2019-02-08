import React from 'react';
import MetaTags from 'react-meta-tags';
 
class Metadata extends React.Component {
  render() {
    return (
          <MetaTags>
            <title>{this.props.title}</title>
            <meta name="description"  content={this.props.description} />
            <meta property="og:title" content={this.props.og_title} />
            <meta property="og:description" content={this.props.og_description}/>
            <meta property="og:url"   content={this.props.og_url} />
            <meta property="og:image" content={this.props.og_image} />
            <meta property="og:type"  content="website" />
          </MetaTags>
      )
  }
}
export default Metadata;