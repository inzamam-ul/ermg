import PropTypes from 'prop-types';
// material

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 0,
      }}
    >
      <img style={{ height: 40, borderRadius: '50%' }} src="/logo.png" alt="" />{' '}
      <img style={{ height: 20, marginLeft: 10 }} src="/text.png" alt="" />
    </div>
  );
}
