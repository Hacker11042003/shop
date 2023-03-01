import React, { Component } from "react";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import ShowFulItem from "./components/ShowFulItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems:[],
      items: [
        {
          id: 1,
          title: "Стул серый",
          image:
            "http://cdn.shopify.com/s/files/1/0055/6082/7950/products/ButtonedAdjustableOfficeChair-ZH0746_grande.jpg?v=1641892330",
          descr: "lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "chairs",
          price: 49.99,
        },
        {
          id: 2,
          title: "Стол",
          image:
            "https://www.makeithomely.co.uk/pub/media/catalog/product/j/b/jb-wd-coast-gry-din-chair-pair.jpg",
          descr: "lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "tables",
          price: "20.99",
        },
        {
          id: 3,
          title: "Диван",
          image: "https://m.media-amazon.com/images/I/81Fdsh6B2vL._SL1500_.jpg",
          descr: "lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "sofa",
          price: "120.99",
        },
        {
          id: 4,
          title: "Лампа",
          image:
            "https://cdn.webshopapp.com/shops/266390/files/243595016/image.jpg",
          descr: "lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "light",
          price: "60.99",
        },
        {
          id: 5,
          title: "Стул белый",
          image:
            "https://www.makeithomely.co.uk/pub/media/catalog/product/j/b/jb-wd-coast-gry-din-chair-pair.jpg",
          descr: "lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "tables",
          price: "25.99",
        },
        {
          id: 6,
          title: "Лампа",
          image:
            "https://cdn.webshopapp.com/shops/266390/files/243595016/image.jpg",
          descr: "lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "light",
          price: "60.99",
        },
      ],
      showFulItem: false,
      fulItem: {},

    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }

  addToOrder(item) {
    let isInArry = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id){
        isInArry = true
      }
    });
    if (!isInArry) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category){
    if(category === "all"){
     return this.setState({currentItems: this.state.items})
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })

  }





onShowItem(item){
  this.setState({fulItem: item})
  this.setState({showFulItem: !this.state.showFulItem})

}

  render() {
    return (
      <div className="wrapper">
        <Header onDelete = {this.deleteOrder} orders={this.state.orders} />
        <Category chooseCategory = {this.chooseCategory}/>
        <Items  onShowItem = {this.onShowItem} items={this.state.currentItems} onAddToOrder={this.addToOrder} />
        {this.state.showFulItem && <ShowFulItem onAddToOrder={this.addToOrder} item = {this.state.fulItem}/>}

        <Footer />
      </div>
    );
  }
}

export default App;
