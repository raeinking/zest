import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <div className="locationAndMoney">
        <span className="siDistance"><i class="fa-solid fa-location-dot"></i> Erbil</span>
        <span className="siTaxiOp">$ 3,434</span>
        </div>
        <div className="disDiv">
          <div className="locationAndMoney">
            <span className="siCancelOpSubtitle icon"><i class="fa-solid fa-bed"></i> 2 Bed</span>
            <span className="siCancelOpSubtitle icon"><i class="fa-solid fa-couch"></i> 1 Living room</span>
          </div>
          <div className="locationAndMoney">
            <span className="siCancelOpSubtitle icon"><i class="fa-solid fa-bath"></i> 1 BathRoom</span>
            <span className="siCancelOpSubtitle icon"><i class="fa-solid fa-utensils"></i> 1 Kitchen</span>
          </div>
          <div className="locationAndMoney">
            <span className="siCancelOpSubtitle icon"><i class="fa-solid fa-building"></i> 250 m</span>
            <span className="siCancelOpSubtitle icon"><i class="fa-solid fa-warehouse"></i> 1 Garage</span>
          </div>
        </div>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <button><i class="fa-solid fa-phone"></i> Phone Number</button>
          <button><i class="fa-solid fa-envelope"></i> Email</button>
        </div>
        <div className="siDetailTexts">
          <button className="siCheckButton">Rent</button>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
