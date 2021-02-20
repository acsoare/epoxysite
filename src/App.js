import "./App.css";
import React, { useState } from "react";
import ImageView from "./components/ImageView";
import ImageView2 from "./components/ImageView2";
import ImageView3 from "./components/ImageView3";
import ImageView4 from "./components/ImageView4";
import ImageView5 from "./components/ImageView5";
import ImageView6 from "./components/ImageView6";
import ImageView7 from "./components/ImageView7";
import products from "../src/components/products.json";
import Stripe from "./components/StripeContainer";

function App(indexOfImage) {
  const state = { selectedCardType: "" };

  const [click, setClick] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [newlist, setNewList] = useState([]);
  const [cart, setCart] = useState([]);
  const [dimCustomise, setDimCustomise] = useState(false);
  const [showItem, setShowItem] = useState(false);

  const PAGE_PRODUCTS = "main-page";
  const PAGE_CART = "cart";
  const PAGE_DETALII = "detalii";
  const PAGE_CHECKOUT = "checkout";

  const [page, setPage] = useState(PAGE_PRODUCTS);

  const handleClick = () => setClick(!click);
  const handleOverlay = () => setOverlay(!overlay);
  const handleCustomise = () => setDimCustomise(!dimCustomise);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
    console.log(cart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getIndexOfClick = (product) => {
    global.indexOfImage = product.target.id - 1;
    console.log(global.indexOfImage);
    console.log(products[global.indexOfImage].id);
    console.log(products);
    handleOverlay();
    return;
  };

  function handleChange(e) {
    console.log(e.target.value);
  }

  const renderCheckout = () => (
    <div>
      {showItem ? (
        <Stripe />
      ) : (
        <>
          <h3>1300RON</h3>
          <img
            src="http://hosting2141355.online.pro/assets/images/masa3/1.jpeg"
            alt=""
          />
          <button onClick={() => setShowItem(true)}>Finalizeaza</button>
        </>
      )}
    </div>
  );

  const renderPage = () => (
    <>
      {!overlay ? (
        <div className="flex flex-col">
          <div className="w-full h-16 bg-black flex items-center justify-between justify-center  top-0 fixed z-10">
            {/* Header */}

            {click ? (
              <i
                className="fas fa-times fa-lg ml-10 text-white transform hover:scale-125 duration-200 flex align-middle z-50"
                onClick={handleClick}
              ></i>
            ) : (
              <i
                className="fas fa-bars fa-lg ml-10 text-white transform hover:scale-125 duration-200 flex align-middle z-50"
                onClick={handleClick}
              ></i>
            )}

            <div className="hidden font-thin text-5xl text-white  font-custom md:block  ">
              <a href="/">EPOXY</a>
            </div>

            {click ? (
              <div className="bg-black absolute top-0 z-40 overflow-hidden w-3/4 md:w-1/3 lg:w-1/3 xl:w-1/3 h-screen rounded-3xl rounded-bl-none rounded-tl-none rounded-tr-none">
                <div className="grid grid-cols-1 text-white   mt-20 leading-loose text-3xl font-fira divide-y divide-white divide-opacity-50 ">
                  <div className="flex items-center self-center justify-items-center justify-center  ">
                    Acasa
                  </div>

                  <div className="flex items-center self-center justify-items-center justify-center">
                    Contact
                  </div>
                  <div className="flex items-center self-center justify-items-center justify-center">
                    FAQ
                  </div>
                  <div className="flex items-center self-center justify-items-center justify-center">
                    Produse
                  </div>
                  <div className="flex items-center self-center justify-items-center justify-center">
                    Configurator
                  </div>
                </div>
              </div>
            ) : null}
            <div className="flex justify-between text-black ">
              <button onClick={() => navigateTo(PAGE_CART)}>
                <div className="flex font-fira">
                  <i class="fas fa-shopping-cart fa-2x flex text-white align-middle"></i>{" "}
                  <div className="flex place-self-start justify-center align-top b-2 rounded-xl text-white bg-red-400 w-6 h-6">
                    {cart.length}
                  </div>
                </div>
              </button>
              <button>
                <a href="/facebook">
                  <i className="fab fa-facebook-square fa-2x mr-2 transform hover:scale-125 duration-200 ml-2 text-white"></i>
                </a>
              </button>

              <button>
                <a href="/instagram">
                  <i className="fab fa-instagram fa-2x mr-2 transform hover:scale-125 duration-200 text-white"></i>
                </a>
              </button>
            </div>
          </div>

          <div className=" bg-white mt-16 w-full h-20 flex justify-center items-center text-black font-custom text-5xl md:hidden lg:hidden xl:hidden ">
            <a href="/">EPOXY</a>
          </div>

          <img
            src="http://hosting2141355.online.pro/assets/images/eeft1.jpg"
            alt=""
            className="cover bg-no-repeat bg-cover bg-center w-full inline-block relative box-border h-full w-full lg:p-8 border-8 pt-0 border-white"
          />

          <div className="bg-white w-full h-20 md:h-56 lg:h-56 xl:h-56 flex text-black font-garamon items-center md:text-5xl lg:text-5xl">
            <h1 className="ml-20 md:ml-72 lg:ml-72 xl-ml-72">
              <b>design</b> <em>și</em> <b>eleganță</b>
            </h1>
          </div>
          <section className="bg-gray-200 w-full h-auto flex flex-col">
            <i class="fab fa-gg fa-3x flex items-center align-middle justify-center mt-10"></i>
            <div className="flex items-center justify-center font-fira text-2xl tracking-widest">
              PRODUSE
            </div>

            {/* GRID */}

            <div className="flex relative ml-0 mr-0 mt-20 md:ml-20 lg:ml-20 xl:ml-20 flex justify-center grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
              {products.map((product, indexOfImage) => (
                <div className="group card ml-0 mr-0 mb-20 md:mr-14 lg:mr-14 xl:mr-14 bg-white p-2 pb-10 rounded-xl shadow-2xl float-none  ">
                  <button>
                    <img
                      value={product.id}
                      onChange={handleChange}
                      id={product.id}
                      className="w-full h-96 object-cover hover:opacity-60 transition duration-300"
                      onClick={getIndexOfClick}
                      src={product.imagine}
                      alt=""
                    />
                  </button>

                  <span className="font-bold font-fira flex justify-center mt-2 mb-2">
                    {product.nume}
                  </span>
                  <span className="block text-gray-500 text-sm font-fira mb-2 text-center ">
                    {product.descriere}
                  </span>
                  <div className="flex justify-evenly">
                    <div>
                      <span className="font-fira flex items-center text-lg ">
                        {product.pret} RON
                      </span>

                      <span className="font-fira flex items-center text-lg line-through">
                        {product.discount} RON
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-white h-10 w-28 font-fira text-lg font-thin border-black border-2 hover:bg-black hover:text-white "
                    >
                      Adauga in cos
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="bg-white-400 h-screen w-screen flex flex-col ">
          <i
            class="fas fa-arrow-left fa-2x absolute left-4 top-4 text-red-400 md:text-black md:left-8 md:top-8  "
            onClick={handleOverlay}
          ></i>
          {/* <button
            onClick={handleOverlay}
            className="font-firai md:ml-10 flex focus:outline-none items-center self-center absolute md:self-start justify-center bg-black h-10 w-32 text-white hover:bg-white hover:text-black"
          >
            Inapoi
          </button> */}
          {/* <img
            className="rounded-3xl focus:outline-none rounded-t-none shadow-xl flex items-center justify-center object-contain sm:object-scale-down w-full h-full"
            src={products[global.indexOfImage].imagine}
            alt=""
          /> */}
          {products[global.indexOfImage].id === "1" ? (
            <ImageView />
          ) : (
            console.log(products[global.indexOfImage].id)
          )}
          {products[global.indexOfImage].id === "2" ? (
            <ImageView2 />
          ) : (
            console.log(products[global.indexOfImage].id)
          )}
          {products[global.indexOfImage].id === "3" ? (
            <ImageView3 />
          ) : (
            console.log(products[global.indexOfImage].id)
          )}
          {products[global.indexOfImage].id === "4" ? (
            <ImageView4 />
          ) : (
            console.log(products[global.indexOfImage].id)
          )}
          {products[global.indexOfImage].id === "5" ? (
            <ImageView5 />
          ) : (
            console.log(products[global.indexOfImage].id)
          )}
          {products[global.indexOfImage].id === "6" ? (
            <ImageView6 />
          ) : (
            console.log(products[global.indexOfImage].id)
          )}
          {products[global.indexOfImage].id === "7" ? (
            <ImageView7 />
          ) : (
            console.log(products[global.indexOfImage].id)
          )}
        </div>
        // </div>
      )}
    </>
  );

  const renderCart = () => (
    <>
      <div className="flex flex-col">
        <div className="w-full  h-16 bg-black mx-auto flex items-center justify-between top-0 fixed z-10">
          {/* Header */}

          {click ? (
            <i
              className="fas fa-times fa-lg ml-10 text-white z-50 transform hover:scale-125 duration-200 flex align-middle"
              onClick={handleClick}
            ></i>
          ) : (
            <i
              className="fas fa-bars fa-lg ml-10 text-white z-50 transform hover:scale-125 duration-200"
              onClick={handleClick}
            ></i>
          )}

          <div className="hidden font-semibold text-5xl text-white font-custom md:block z-50  ">
            <a href="/">EPOXY</a>
          </div>

          {click ? (
            <div className="bg-black absolute top-0 z-40 overflow-hidden w-3/4 md:w-1/3 lg:w-1/3 xl:w-1/3 h-screen rounded-3xl rounded-bl-none rounded-tl-none rounded-tr-none  ">
              <div className="grid grid-cols-1 text-white   mt-20 leading-loose text-3xl font-fira divide-y divide-white divide-opacity-50 ">
                <div className="flex items-center self-center justify-items-center justify-center">
                  Acasa
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  Contact
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  FAQ
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  Produse
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  Configurator
                </div>
              </div>
            </div>
          ) : null}

          <div className="flex justify-between text-black ">
            <button onClick={() => navigateTo(PAGE_CART)}>
              <div className="flex font-fira">
                <i class="fas fa-shopping-cart fa-2x flex align-middle text-white"></i>
                <div className="flex place-self-start justify-center  mr-6 md:mr-10 lg:mr-10 xl:mr-10 align-top b-2 rounded-xl bg-red-400 w-6 h-6">
                  {cart.length}
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className=" bg-white w-full h-20 flex justify-center items-center text-black font-custom text-5xl md:hidden lg:hidden xl:hidden">
          EPOXY
        </div>
      </div>

      {cart.map((product, indexOfImage) => (
        <div className="self-center group flex flex-col card ml-0 w-screen h-auto mr-0 mb-20 md:mr-14 lg:mr-14 xl:mr-14 bg-white p-2 pb-10 rounded-xl shadow-2xl float-none ">
          <img
            value={product.id}
            onChange={handleChange}
            id={product.id}
            className="w-screen md:h-600 lg:h-600 xl:h-600 md:w-600 lg:h-600 xl:h-600 max-h-lg h-96 object-cover flex self-center "
            onClick={getIndexOfClick}
            src={product.imagine}
            alt=""
          />

          <div className="flex flex-col">
            <span className="font-bold font-fira flex justify-center mt-2 mb-2">
              {product.nume}
            </span>
            <span className="block text-gray-500 text-sm font-fira mb-2 text-center ">
              {product.descriere}
            </span>
            <div className="flex justify-evenly">
              <div>
                <span className="font-fira flex items-center text-lg ">
                  Pret cu reducere: {product.pret} RON
                </span>

                <span className="font-fira flex items-center text-lg line-through">
                  Pret anterior: {product.discount} RON
                </span>

                <span className="font-fira flex items-center text-lg font-bold">
                  TOTAL: {product.pret} RON
                </span>
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() => removeFromCart(product)}
                  className="bg-white h-10 w-28 mb-4 font-fira text-lg font-thin border-black border-2 hover:bg-black hover:text-white "
                >
                  {/* <a href="/quickbuy">Adauga in cos</a> */}
                  Sterge Produs
                </button>
                <button
                  onClick={() => setPage(PAGE_DETALII)}
                  className="bg-white h-10 w-28 font-fira text-lg font-thin border-black border-2 hover:bg-black hover:text-white "
                >
                  {/* <a href="/quickbuy">Adauga in cos</a> */}
                  Mai Departe
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  const renderDetalii = () => (
    <>
      <div className="flex flex-col">
        <div className="w-full h-16 bg-black mx-auto flex items-center justify-between  top-0 fixed z-10">
          {/* Header */}

          {click ? (
            <i
              className="fas fa-times fa-lg ml-10 transform text-white hover:scale-125 duration-200 flex align-middle z-50"
              onClick={handleClick}
            ></i>
          ) : (
            <i
              className="fas fa-bars fa-lg ml-10 transform text-white hover:scale-125 duration-200 z-50"
              onClick={handleClick}
            ></i>
          )}

          <div className="hidden font-semibold text-5xl text-white font-custom md:block">
            <a href="/">EPOXY</a>
          </div>

          {click ? (
            <div className="bg-black absolute top-0 z-40 overflow-hidden w-3/4 md:w-1/3 lg:w-1/3 xl:w-1/3 h-screen rounded-3xl rounded-bl-none rounded-tl-none rounded-tr-none  ">
              <div className="grid grid-cols-1 text-white   mt-20 leading-loose text-3xl font-fira divide-y divide-white divide-opacity-50 ">
                <div className="flex items-center self-center justify-items-center justify-center">
                  Acasa
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  Contact
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  FAQ
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  Produse
                </div>
                <div className="flex items-center self-center justify-items-center justify-center">
                  Configurator
                </div>
              </div>
            </div>
          ) : null}

          <div className="flex justify-between text-black ">
            <button onClick={() => navigateTo(PAGE_CART)}>
              <div className="flex font-fira">
                <i class="fas fa-shopping-cart fa-2x flex align-middle text-white"></i>{" "}
                <div className="flex place-self-start justify-center mr-6 align-top b-2 rounded-xl bg-red-400 w-6 h-6">
                  {cart.length}
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className=" bg-white w-full h-20 flex justify-center items-center text-white font-custom text-5xl md:hidden lg:hidden xl:hidden">
          EPOXY
        </div>
      </div>
      {cart.map((product, indexOfImage) => (
        <>
          <div className="flex flex-col">
            <div className="flex-col justify-center self-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start  card ml-0 h-auto mr-0 mb-20 md:mr-14 lg:mr-14 xl:mr-14 bg-white p-2 pb-10 rounded-xl shadow-2xl float-none  ">
              <img
                value={product.id}
                onChange={handleChange}
                id={product.id}
                className="w-screen md:h-600 lg:h-600 xl:h-600 md:w-600 lg:h-600 xl:h-600 max-h-lg h-96 object-cover flex self-center "
                onClick={getIndexOfClick}
                src={product.imagine}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-center -mt-12">
            <div className="font-fira">DIMENSIUNI</div>
            <span className="font-fira ml-2">
              <ul className="font-fira list-disc ml-10 mt-2 mb-4">
                <li className="list-none">Standard: </li>
                <li>{product.lungime}</li>
                <li>{product.latime}</li>
                <li>{product.inaltime}</li>
                <span>Material: {product.material}</span>
              </ul>
              Dimensiunile de mai sus sunt standard. <br /> Daca doriti
              dimensiuni personalizate va rugam sa dati click aici
            </span>
            <div className="flex ">
              <button
                onClick={handleCustomise}
                className="mr-2 bg-transparent border-black border-2 w-36 h-16 font-fira mt-10 mb-10 hover:text-white hover:bg-black"
              >
                Alege Standard
              </button>
              <div className="flex items center justify-center align-middle self-center">
                sau
              </div>
              <button
                onClick={handleCustomise}
                className="ml-2 bg-transparent border-black border-2 w-36 h-16 font-fira mt-10 mb-10 hover:text-white hover:bg-black"
              >
                Customizeaza
              </button>
            </div>
            {dimCustomise ? (
              <div className="mb-20">
                <div className="font-fira">Lungime: </div>
                <div className="flex">
                  <input
                    className="text-black font-fira border-2 border-black flex"
                    type="text"
                  />
                  <div className="font-fira">cm</div>
                </div>
                <div className="font-fira">Latime: </div>
                <div className="flex">
                  <input
                    className="text-black font-fira border-2 border-black flex"
                    type="text"
                  />
                  <div className="font-fira">cm</div>
                </div>
                <div className="font-fira">Inaltime: </div>
                <div className="flex">
                  <input
                    className="text-black font-fira border-2 border-black flex"
                    type="text"
                  />
                  <div className="font-fira">cm</div>
                </div>
                <div className="font-fira">Material: </div>
                <div className="flex">
                  <input
                    className="text-black font-fira border-2 border-black flex"
                    type="text"
                  />
                </div>
                <div className="font-fira">Culoare Epoxina: </div>
                <div className="flex">
                  <input
                    className="text-black font-fira border-2 border-black flex"
                    type="text"
                  />
                </div>
                <button
                  onClick={() => navigateTo(PAGE_CHECKOUT)}
                  className="flex items-center self-center justify-center ml-2 bg-transparent border-black border-2 w-10 h-8 font-fira mt-10 mb-10 hover:text-white hover:bg-black"
                >
                  OK
                </button>
              </div>
            ) : null}
          </div>
        </>
      ))}
    </>
  );

  return (
    <div className="App">
      <header></header>
      {page === PAGE_PRODUCTS && renderPage()}
      {page === PAGE_CART && renderCart()}
      {page === PAGE_DETALII && renderDetalii()}
      {page === PAGE_CHECKOUT && renderCheckout()}
    </div>
  );
}

export default App;
