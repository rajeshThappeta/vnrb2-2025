function Product(props) {
  //{ data :{ pid,name,price}}
  return (
    <div className="w-25 shadow-lg mx-auto text-center p-4 bg-info mt-3 ">
      <p className="fs-3">{props.data.pid}</p>
      <p className="fs-1">{props.data.name}</p>
      <p className="fs-4">{props.data.price}</p>
    </div>
  );
}

export default Product;
