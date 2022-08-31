
function Random ({min, max }){
  const number = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <h6 className="d-flex border border-dark m-2">{`Random value between ${min} and ${max} => ${number}`}</h6>
    </div>
  );
};

export default Random;