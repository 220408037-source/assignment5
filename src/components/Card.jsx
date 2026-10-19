function Card({ children }) {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    padding: '16px',
    margin: '12px 0',
    borderRadius: '8px',
    backgroundColor: '#fdfdfd'
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}

export default Card;