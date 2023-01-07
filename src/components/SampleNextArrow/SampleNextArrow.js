function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,display: "block",right:'4px',zIndex:'1'}}
        onClick={onClick}
      />
    );
  }
  export default SampleNextArrow