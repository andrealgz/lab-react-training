import "./IdCard.css"

function IdCard({lastName, firstName, gender, height, birth, picture}){
  let decimalHeight = height/100;
  let date = birth.toDateString()

  return(
    <div className="id-card m-2">
      <div className="user-card row" >
          <img class="col-2" src={picture} alt="userPicture"/>
          <div className="user col-2">
            <h6><strong>First Name:</strong> {firstName}</h6>
            <h6><strong>Last Name:</strong> {lastName} </h6>
            <h6><strong> Gender:</strong> {gender} </h6>
            <h6><strong> Heigth:</strong> {decimalHeight}m </h6>
            <h6><strong> Birth:</strong> {date} </h6>
        </div>
      </div>
    </div>
  );
};

export default IdCard;