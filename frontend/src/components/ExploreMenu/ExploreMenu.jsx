import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        A menu is a detailed list of options offered to the customer when they
        come to eat or drink at the restaurant or bar. They offer a wide variety
        of choices, and are priced differently based on the ingredients used,
        time taken to cook the dishes, or the season and availability of
        ingredients used.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
          return (
            <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;
