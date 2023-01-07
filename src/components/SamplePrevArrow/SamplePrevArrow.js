function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: '6px', zIndex:'1'}}
        onClick={onClick}
      />
    );
  }
  export default SamplePrevArrow