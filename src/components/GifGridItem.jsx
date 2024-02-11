import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
  // console.log(id, title, url);
    return (
    // <li key={id}>{title}</li>
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

