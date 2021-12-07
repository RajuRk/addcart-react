import './App.css';
import {React, useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
import { Rating, RatingView } from 'react-simple-star-rating'

function App() {
  
  let [cartItems, setCartItems] = useState([]);
  let [cart, setCart] = useState(0);
  let [siSelected, setSiSelected] = useState(false);
  let [total, setTotal] = useState(0)
  let [show, setShow] = useState(false);
  let [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
    console.log(`${rate}`)
    
  }
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

function addCartItem(item){
    setCart(cart + 1);
    // setSiSelected(prev => !prev);
    setTotal(prev => prev + item.price);
    cartItems.push(item);
    console.log(cartItems);
  }

  function RemoveCartItem(value){
    setCart(prev => prev - 1);
    // setSiSelected(prev => !prev);
    setTotal(prev => prev - value);
  }

  function addToCart(item){
    setCart(cart + 1);
    setTotal(prev => prev + item.price);
    cartItems.push(item);
    console.log(cartItems);
  }

  function deleteItem(e){
    cartItems.splice(cartItems.indexOf(e),1);
    setCart(cart - 1);
    setTotal(prev=>prev-e.price);
  }


  return (
    <>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart List</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          {
            cartItems.map(e => {
              return <div>
                <table>
                   <tr style={{display: 'flex', justifyContent: 'space-around', textAlign: 'left'}}>
                       <td>{e.name}</td>
                       <td>{e.price}</td>
                       <td><button className="btn btn-danger" onClick={() => deleteItem(e)}>Delete</button></td>
                   </tr>
                </table>
              </div>
            })
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        {/* <div>
                          price ${total}
                        </div> */}
                    </form>
                    <button class="btn btn-outline-dark" onClick={handleShow}>
                            <i class="bi-cart-fill me-1"></i>
                            cart 
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                    </button>
                </div>
            </div>
        </nav>
        {/* Header */}
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>         
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Sale badge */}
                            <div class="badge bg-dark text-white position-absolute" style={{ top:'0.5rem', right:'0.5rem'}}>Sale</div>
                            {/* Product image */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name */}
                                    <h5 class="fw-bolder">Special Item</h5>
                                    {/* Product reviews */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        {/* <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div> */}
                                        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                                        <RatingView ratingValue={rating}/>
                                    </div>
                                    {/* Product price */}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              {
                                false?
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => RemoveCartItem(18)}>Remove to Cart</button></div>:
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => addCartItem({name: "Special Item", price: 18})}>Add Cart</button></div>
                              }

                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Sale badge */}
                            <div class="badge bg-dark text-white position-absolute" style={{ top:'0.5rem', right:'0.5rem'}}>Sale</div>
                            {/* Product image */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name */}
                                    <h5 class="fw-bolder">Sale Item</h5>
                                    {/* Product price */}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => addToCart({name: "Sale Item", price: 25})}>Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Product image */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name */}
                                    <h5 class="fw-bolder">Popular Item</h5>
                                    {/* Product reviews */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        {/* <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div> */}
                                        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                                    </div>
                                    {/* Product price */}
                                    $40.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => addCartItem({name: "Popular Item", price: 40})}>Add Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Sale badge */}
                            <div class="badge bg-dark text-white position-absolute" style={{ top:'0.5rem', right:'0.5rem'}}>Sale</div>
                            {/* Product image */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name */}
                                    <h5 class="fw-bolder">Sale Item</h5>
                                    {/* Product price */}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => addToCart({name: "Sale Item", price: 25})}>Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* Product image */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* Product name */}
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    {/* Product price */}
                                    $120.00 - $280.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{ top:'0.5rem', right:'0.5rem'}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        {/* <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div> */}
                                        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => addCartItem({name: "Special Item", price: 18})}>Add Cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        {/* <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div> */}
                                        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $40.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => addCartItem({name: "Popular Item", price: 40})}>Add Cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>   
    </>
  );
}

export default App;
